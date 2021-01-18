
var countEl = document.getElementById("count");
var coinsEl = document.getElementById("coins");
var priceEl = document.getElementById("price");
var unitsEl = document.getElementById("units");
var percentEl = document.getElementById("24hpercent");
var searchEl = document.getElementById("search-btn");


searchEl.addEventListener("click", addWatchlistRow);

function addWatchlistRow() {

//var option = document.getElementsByTagName("option")[0].getAttribute("value");//value selected in dropdown
var e = document.getElementById("inputGroupSelect02");
var option = e.value;
console.log(option);

var table = document.getElementsByTagName('table')[0];
console.log(table);

var newRow = table.insertRow(table.rows.length++);

let count = 0;
++count;
console.log(count);

var watchCount = newRow.insertCell(0);
var watchCoin = newRow.insertCell(1);
var watchPrice = newRow.insertCell(2);
var watchUnits = newRow.insertCell(3);
var watchValue = newRow.insertCell(4);
var watchPerc = newRow.insertCell(5);

    if (option === '1') {
        watchCount.innerHTML = '1';
        watchCoin.innerHTML = 'Bitcoin';
        watchPrice.innerHTML = '$34,377.21';
        watchUnits.innerHTML = '$19.57 B';
        watchValue.innerHTML = '$ 639.62 B';
        watchPerc.innerHTML = '-4.19%';
    }
    else if (option === '2') {
        watchCount.innerHTML =  '2';
        watchCoin.innerHTML = 'Ethereum';
        watchPrice.innerHTML = '$1,055.61';
        watchUnits.innerHTML = '$10.06 B';
        watchValue.innerHTML = '$ 9.40 B';
        watchPerc.innerHTML = '-4.70%';
    }
    else if (option === '3') {
        watchCount.innerHTML =  '3';
        watchCoin.innerHTML = 'Litecoin';
        watchPrice.innerHTML = '$1,055.61';
        watchUnits.innerHTML = '$10.06 B';
        watchValue.innerHTML = '$ 9.40 B';
        watchPerc.innerHTML = '-4.70%';
    }
}

//API function to get data

//save to localStorage
