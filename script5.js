$(document).ready(function() {
	var queryURL2 = "https://api.coinlore.net/api/tickers/"
	$.ajax({
		url: queryURL2,
		method: "GET"
	}).then(function(response) {
		var countEl = document.getElementById("count");
		var coinsEl = document.getElementById("coins");
		var priceEl = document.getElementById("price");
		var unitsEl = document.getElementById("units");
		var percentEl = document.getElementById("24hpercent");
		var searchEl = document.getElementById("search-btn");
		listbtn.addEventListener("click", addWatchlistRow);
		//function emptyDivs(){
			
		//}
		var currencies = ["Bitcoin", "Ethereum", "Tether", "Polkadot", "XRP", "Cardano", "Litecoin", "Bitcoin Cash",
			"ChainLink", "Binance Coin"
		]
		var localData = JSON.parse(localStorage.getItem('portfolioData'));
		if (localData == null) {
			localData = [];
		}
		var totalProfit = 0.0;
		for (i = 0; i < localData.length; i++) {
			var table1 = document.getElementsByTagName('table')[1]
			var newRow1 = table1.insertRow(table1.rows.length++);
			var PortfolioCount = newRow1.insertCell(0);
			PortfolioCount.innerHTML = i + 1;
			var PortfolioCoin = newRow1.insertCell(1);
			PortfolioCoin.innerHTML = localData[i].coinName;
			var PortfolioPrice = newRow1.insertCell(2);
			var nowPrice;
			for (j = 0; j < currencies.length; j++) {
				if (localData[i].coinName == currencies[j]) {
					nowPrice = response.data[j].price_usd;
					break;
				}
			}
			PortfolioPrice.innerHTML = '$' + nowPrice;
			var value = response.data[j].price_usd * localData[i].units;
			var PortfolioUnits = newRow1.insertCell(3);
			PortfolioUnits.innerHTML = localData[i].units.toFixed(4);
			var PortfolioValue = newRow1.insertCell(4);
			PortfolioValue.innerHTML = '$' + (nowPrice * localData[i].units).toFixed(2);
			var PortfolioProfit = newRow1.insertCell(5);
			PortfolioProfit.innerHTML = '$' + ((nowPrice - localData[i].price) * localData[i].units).toFixed(2);
			var deletebtnEl = document.createElement("button");
			deletebtnEl.textContent = "Delete";
			newRow1.appendChild(deletebtnEl);

			totalProfit += (nowPrice - localData[i].price) * localData[i].units;
			console.log(totalProfit);

			(function(i) {
				deletebtnEl.onclick = function() {
					var tmp = JSON.parse(localStorage.getItem('portfolioData'));
					tmp.splice(i, 1);
					localStorage.setItem("portfolioData", JSON.stringify(tmp));
					table1.deleteRow(i + 1);
					for (j = i + 1; j < table1.rows.length; j++) {
						table1.rows[j].cells[0].innerHTML = j;
					}
				}
			})(i);

		
			
		}

		$("#totalProfit").text("$Total profit/loss:" + totalProfit.toFixed(2));
     
		function addWatchlistRow() {
		// 	if (table.rows.value != 0){
		// 	$("#watchlist").empty()
		// }
			
			var setprice = [];
			var count = [];
			for (i = 0; i < currencies.length; i++) {
				var table = document.getElementsByTagName('table')[0];
				var newRow = table.insertRow(table.rows.length++);
				var watchCount = newRow.insertCell(0);
				var watchCoin = newRow.insertCell(1);
				var watchPrice = newRow.insertCell(2);
				var watchVolume = newRow.insertCell(3);
				var watchValue = newRow.insertCell(4);
				var watchPerc = newRow.insertCell(5);
				watchCount.innerHTML = i + 1;
				count[i] = i + 1;
				localStorage.setItem('someData', count);
				watchCoin.innerHTML = currencies[i];
				watchPrice.innerHTML = '$' + response.data[i].price_usd;

				setprice[i] = watchPrice.textContent;
				localStorage.setItem('someData', setprice);
				watchVolume.innerHTML = response.data[i].volume24.toFixed(2);
				watchValue.innerHTML = '$' + response.data[i].market_cap_usd;
				watchPerc.innerHTML = response.data[i].percent_change_24h;
				var buttonEl = document.createElement("button");
				buttonEl.textContent = "Add";
				newRow.appendChild(buttonEl);
				var modal = document.getElementById("myModal");
				var span = document.getElementsByClassName("close")[0];
				(function(i) {
					buttonEl.onclick = function() {
						modal.style.display = "block";
						localStorage.setItem("nowAddIndex", i);
					}
				})(i);
				span.onclick = function() {
					modal.style.display = "none";
				}
			}

			confirmbtn.addEventListener("click", addPortfolioRow);

			function addPortfolioRow() {
				modal.style.display = "none";
				var nowAddIndex = localStorage.getItem("nowAddIndex");
				var portfolioData = JSON.parse(localStorage.getItem('portfolioData'));
				if (portfolioData == null) {
					portfolioData = [];
				}
				var table1 = document.getElementsByTagName('table')[1]

				var newRow1 = table1.insertRow(table1.rows.length++);

				var PortfolioCount = newRow1.insertCell(0);
				PortfolioCount.innerHTML = portfolioData.length + 1;
				var PortfolioCoin = newRow1.insertCell(1);
				PortfolioCoin.innerHTML = currencies[nowAddIndex];
				var PortfolioPrice = newRow1.insertCell(2);
				PortfolioPrice.innerHTML = '$' + response.data[nowAddIndex].price_usd;
				var money = document.getElementById("moneyinvested").value;
				var units = money / response.data[nowAddIndex].price_usd;
				var value = response.data[nowAddIndex].price_usd * units;
				var PortfolioUnits = newRow1.insertCell(3);
				PortfolioUnits.innerHTML = '$' + units.toFixed(4);
				var PortfolioValue = newRow1.insertCell(4);
				PortfolioValue.innerHTML = '$' + value.toFixed(2);
				var PortfolioProfit = newRow1.insertCell(5);
				PortfolioProfit.innerHTML = '$' + 0;

				var deletebtn = document.createElement("button");
				deletebtn.textContent = "Delete";
				newRow1.appendChild(deletebtn);

				var lsRow = {
					rownumber: portfolioData.length + 1,
					coinName: currencies[nowAddIndex],
					price: response.data[nowAddIndex].price_usd,
					units: units,
				};
				portfolioData.push(lsRow)
				localStorage.setItem("portfolioData", JSON.stringify(portfolioData));


				var deleteIndex = portfolioData.length;
				(function(deleteIndex) {
					deletebtn.onclick = function() {
						console.log(deleteIndex);
						var tmp = JSON.parse(localStorage.getItem('portfolioData'));
						tmp.splice(deleteIndex - 1, 1);
						localStorage.setItem("portfolioData", JSON.stringify(tmp));
						table1.deleteRow(deleteIndex);
						for (j = deleteIndex + 1; j < table1.rows.length; j++) {
							table1.rows[j].cells[0].innerHTML = j;
						}
						deleteIndex = deleteIndex - 1;
			            portfolioData.length = portfolioData.length  - 1;
						localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
					}
				})(deleteIndex);





			}

		}

	})


})
