$(document).ready(function (){ 

    var queryURL = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=" + "29de9466349c2dc423012d112499f0d56886e082d2617b7f779b44abe3b379c1"

    var numArticles 

    $.ajax({
        url: queryURL,
        method: "GET"
     }).then(function(response){
        console.log(response);
        //log length of articles 
        var articleLength = response.Data.length; 
        console.log(articleLength);
        //variable to hold news article ([0] to be replaced by [i])
        //for (var i = 0; i < response.Data.length; i++) {};
        var articleData = response.Data[1];
        console.log(articleData);
        //hold data to be displayed
        var articleTitle = response.Data[1].title;
        console.log(articleTitle);
        var articleBody = response.Data[1].body;
        console.log(articleBody);
        var articleCategories = response.Data[1].categories;
        console.log(articleCategories)
        var articleURL = response.Data[1].url;
        console.log(articleURL);
        //var articlePublished = response.Data[1].published_on;
        //console.log(articlePublished);
        var articleSource = response.Data[1].source;
        console.log(articleSource);
        //potential to add upvotes and downvotes
     });

    var articleCount = 0; 

    function updatePage() {
        for (var i = 0; i < numArticles; i++) {
            //increase article count 
            var articleCount = i++;
            // Create the  list group to contain the articles and add the article content for each
            var $articleList = $("<ul>");
            $articleList.addClass("list-group");
            // Add the newly created element to the DOM
            $("#article-section").append($articleList);
        }
    }

updatePage();

// var countEl = document.getElementById("count");
// var coinsEl = document.getElementById("coins");
// var priceEl = document.getElementById("price");
// var unitsEl = document.getElementById("units");
// var percentEl = document.getElementById("24hpercent");
// var searchEl = document.getElementById("search-btn");

//get data for price etc. 
// var e = document.getElementById("inputGroupSelect02");
// var option = e.value;
// console.log(option);

// // if (option === 1) {
    
//     var input = "BTC";
// // }

//var queryURL2 = "https://coinlib.io/api/v1/coin?key=" + "8894a69726e56135" + "&pref=EUR&symbol=" + input;

//var queryURL2 = "https://api.coinranking.com/v2/coins";
//?key=" + "coinrankingd104b386ef419e85957925609b9db3385a68c5ca1016db01";


//var queryURL2 = "https://coinlib.io/api/v1/coin?key=" + "8894a69726e56135" + "&pref=EUR&symbol=" + input;
var queryURL2 = "https://api.coinlore.net/api/tickers/"
$.ajax({
    url: queryURL2,
    method: "GET"
 }).then(function(response){
     console.log(response);
     
var countEl = document.getElementById("count");
var coinsEl = document.getElementById("coins");
var priceEl = document.getElementById("price");
var unitsEl = document.getElementById("units");
var percentEl = document.getElementById("24hpercent");
var searchEl = document.getElementById("search-btn");

//listener for list item on click functionality.
searchEl.addEventListener("click", addWatchlistRow);

function addWatchlistRow() {

var option = document.getElementsByTagName("option")[0].getAttribute("value");//value selected in dropdown
var e = document.getElementById("inputGroupSelect02");
var option = e.value;
console.log(option);

var table = document.getElementsByTagName('table')[0];
console.log(table);

var newRow = table.insertRow(table.rows.length++);

let count = 0;
//++count;
console.log(count);

var watchCount = newRow.insertCell(0);
var watchCoin = newRow.insertCell(1);
var watchPrice = newRow.insertCell(2);
var watchVolume = newRow.insertCell(3);
var watchValue = newRow.insertCell(4);
var watchPerc = newRow.insertCell(5);
//var btn = $("<span>").addClass("btn btn-sm").text(add);
var addButton = newRow.insertCell(6);




    if (option === '1') {
        count = count + 1;
        watchCount.innerHTML = count;
        watchCoin.innerHTML = 'Bitcoin';
        watchPrice.innerHTML = '$' + response.data[0].price_usd;
        watchVolume.innerHTML = response.data[0].volume24;
        watchValue.innerHTML = '$' + response.data[0].market_cap_usd;
        watchPerc.innerHTML = response.data[0].percent_change_24h;
        //var btn = $("<span>").addClass("btn btn-sm").text(addButton);
        // // Create a <button> element
        // btn.innerHTML = "ADD";                   // Insert text
        <button type="button" class="btn btn-primary">Primary</button>
        addButton.type = "button";
        
        addButton.innerHTML = "ADD";
        // btn.addClass("btn-success");
        // document.newRow.appendChild(btn);               // Append <button> to <body>

    //     document.addEventListener('addtoportfolio', function() {
    //     var button = document.createElement('button');
    //     button.type = 'button';
    //     button.innerHTML = 'ADD';
    //     //button.className = 'btn-styled';
    //     button.addClass = "newRow";
 
    //     button.onclick = function() {
    // // ...
    //      }})
   
    } else

    if (option === '2') {
        count = count + 1
        watchCount.innerHTML = count;
        watchCoin.innerHTML = 'Ethereum';
        watchPrice.innerHTML = '$' + response.data[1].price_usd;
        watchVolume.innerHTML = response.data[1].volume24;
        watchValue.innerHTML = '$' + response.data[1].market_cap_usd;
        watchPerc.innerHTML = response.data[1].percent_change_24h;
        // var btn = document.createElement("BUTTON");   // Create a <button> element
        // btn.innerHTML = "ADD";                   // Insert text
        // document.body.appendChild(table1);               // Append <button> to <body>
    } else
    if (option === '3') {
        count = count + 1
        watchCount.innerHTML = count;
        watchCoin.innerHTML = 'Tether';
        watchPrice.innerHTML = '$' + response.data[2].price_usd;
        watchVolume.innerHTML = response.data[2].volume24;
        watchValue.innerHTML = '$' + response.data[2].market_cap_usd;
        watchPerc.innerHTML = response.data[2].percent_change_24h;
        // var btn = document.createElement("BUTTON");   // Create a <button> element
        // btn.innerHTML = "ADD";                   // Insert text
        // document.body.appendChild(table1);               // Append <button> to <body>
    } else
    if (option === '4') {
        count = count + 1
        watchCount.innerHTML = count;
        watchCoin.innerHTML = 'Polkadot';
        watchPrice.innerHTML = '$' + response.data[3].price_usd;
        watchVolume.innerHTML = response.data[3].volume24;
        watchValue.innerHTML = '$' + response.data[3].market_cap_usd;
        watchPerc.innerHTML = response.data[3].percent_change_24h;
        // var btn = document.createElement("BUTTON");   // Create a <button> element
        // btn.innerHTML = "ADD";                   // Insert text
        // document.body.appendChild(table1);               // Append <button> to <body>
    } else
    if (option === '5') {
        count = count + 1
        watchCount.innerHTML = count;
        watchCoin.innerHTML = 'XRP';
        watchPrice.innerHTML = '$' + response.data[4].price_usd;
        watchVolume.innerHTML = response.data[4].volume24;
        watchValue.innerHTML = '$' + response.data[4].market_cap_usd;
        watchPerc.innerHTML = response.data[4].percent_change_24h;
        // var btn = document.createElement("BUTTON");   // Create a <button> element
        // btn.innerHTML = "ADD";                   // Insert text
        // document.body.appendChild(table1);               // Append <button> to <body>
    } else
    if (option === '6') {
        count = count + 1
        watchCount.innerHTML = count;
        watchCoin.innerHTML = 'Cardano';
        watchPrice.innerHTML = '$' + response.data[5].price_usd;
        watchVolume.innerHTML = response.data[5].volume24;
        watchValue.innerHTML = '$' + response.data[5].market_cap_usd;
        watchPerc.innerHTML = response.data[5].percent_change_24h;
        // var btn = document.createElement("BUTTON");   // Create a <button> element
        // btn.innerHTML = "ADD";                   // Insert text
        // document.body.appendChild(table1);               // Append <button> to <body>
    } else
    if (option === '7') {
        count = count + 1
        watchCount.innerHTML = count;
        watchCoin.innerHTML = 'Litecoin';
        watchPrice.innerHTML = '$' + response.data[6].price_usd;
        watchVolume.innerHTML = response.data[6].volume24;
        watchValue.innerHTML = '$' + response.data[6].market_cap_usd;
        watchPerc.innerHTML = response.data[6].percent_change_24h;
        // var btn = document.createElement("BUTTON");   // Create a <button> element
        // btn.innerHTML = "ADD";                   // Insert text
        // document.body.appendChild(table1);               // Append <button> to <body>
    } else
    if (option === '8') {
        count = count + 1
        watchCount.innerHTML = count;
        watchCoin.innerHTML = 'Bitcoin Cash';
        watchPrice.innerHTML = '$' + response.data[7].price_usd;
        watchVolume.innerHTML = response.data[7].volume24;
        watchValue.innerHTML = '$' + response.data[7].market_cap_usd;
        watchPerc.innerHTML = response.data[7].percent_change_24h;
        // var btn = document.createElement("BUTTON");   // Create a <button> element
        // btn.innerHTML = "ADD";                   // Insert text
        // document.body.appendChild(table1);               // Append <button> to <body>
    } else
    if (option === '9') {
        count = count + 1
        watchCount.innerHTML = count;
        watchCoin.innerHTML = 'ChainLink';
        watchPrice.innerHTML = '$' + response.data[8].price_usd;
        watchVolume.innerHTML = response.data[8].volume24;
        watchValue.innerHTML = '$' + response.data[8].market_cap_usd;
        watchPerc.innerHTML = response.data[8].percent_change_24h;
        // var btn = document.createElement("BUTTON");   // Create a <button> element
        // btn.innerHTML = "ADD";                   // Insert text
        // document.body.appendChild(table1);               // Append <button> to <body>
    } else
    if (option === '10') {
        count = count + 1
        watchCount.innerHTML = count;
        watchCoin.innerHTML = 'Binance Coin';
        watchPrice.innerHTML = '$' + response.data[9].price_usd;
        watchVolume.innerHTML = response.data[9].volume24;
        watchValue.innerHTML = '$' + response.data[9].market_cap_usd;
        watchPerc.innerHTML = response.data[9].percent_change_24h;
        // var btn = document.createElement("BUTTON");   // Create a <button> element
        // btn.innerHTML = "ADD";                   // Insert text
        // document.body.appendChild(table1);               // Append <button> to <body>
    }


    
    
}
    //  var apiCoins = response.coins;
    //  console.log(apiCoins);

    //  var coinName = response.coins[0].name;
    //  console.log(coinName);

    //  var coinPrice = response.coins[0].price;
    //  console.log(coinPrice);

    //  var coinRank = response.coins[0].rank;
    //  console.log(coinRank);

    //  var coinVolume = response.coins[0].volume_24h;
    //  console.log(coinVolume);

    //  var coinDelta = response.coins[0].delta_24h;
    //  console.log(coinDelta);
 });
         
});

// var countEl = document.getElementById("count");
// var coinsEl = document.getElementById("coins");
// var priceEl = document.getElementById("price");
// var unitsEl = document.getElementById("units");
// var percentEl = document.getElementById("24hpercent");
// var searchEl = document.getElementById("search-btn");

// //listener for list item on click functionality.
// searchEl.addEventListener("click", addWatchlistRow);

// function addWatchlistRow() {

// //var option = document.getElementsByTagName("option")[0].getAttribute("value");//value selected in dropdown
// var e = document.getElementById("inputGroupSelect02");
// var option = e.value;
// console.log(option);

// var table = document.getElementsByTagName('table')[0];
// console.log(table);

// var newRow = table.insertRow(table.rows.length++);

// let count = 0;
// ++count;
// console.log(count);

// var watchCount = newRow.insertCell(0);
// var watchCoin = newRow.insertCell(1);
// var watchPrice = newRow.insertCell(2);
// var watchUnits = newRow.insertCell(3);
// var watchValue = newRow.insertCell(4);
// var watchPerc = newRow.insertCell(5);



//     if (option === '1') {
//         watchCount.innerHTML = '1';
//         watchCoin.innerHTML = 'Bitcoin';
//         watchPrice.innerHTML = response.coins[0].price;
//         watchUnits.innerHTML = '$19.57 B';
//         watchValue.innerHTML = '$ 639.62 B';
//         watchPerc.innerHTML = '-4.19%';
//     }
//     else if (option === '2') {
//         watchCount.innerHTML =  '2';
//         watchCoin.innerHTML = 'Ethereum';
//         watchPrice.innerHTML = '$1,055.61';
//         watchUnits.innerHTML = '$10.06 B';
//         watchValue.innerHTML = '$ 9.40 B';
//         watchPerc.innerHTML = '-4.70%';
//     }
//     else if (option === '3') {
//         watchCount.innerHTML =  '3';
//         watchCoin.innerHTML = 'Litecoin';
//         watchPrice.innerHTML = '$1,055.61';
//         watchUnits.innerHTML = '$10.06 B';
//         watchValue.innerHTML = '$ 9.40 B';
//         watchPerc.innerHTML = '-4.70%';
//     }
// }