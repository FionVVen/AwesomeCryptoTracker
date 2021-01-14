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

//get data for price etc. 
var queryURL2 = "https://coinlib.io/api/v1/coinlist?key=" + "8894a69726e56135" + "&pref=BTC&page=1&order=rank_asc";

$.ajax({
    url: queryURL2,
    method: "GET"
 }).then(function(response){
     console.log(response);

     var apiCoins = response.coins;
     console.log(apiCoins);

     var coinName = response.coins[0].name;
     console.log(coinName);

     var coinPrice = response.coins[0].price;
     console.log(coinPrice);

     var coinRank = response.coins[0].rank;
     console.log(coinRank);

     var coinVolume = response.coins[0].volume_24h;
     console.log(coinVolume);

     var coinDelta = response.coins[0].delta_24h;
     console.log(coinDelta);
 });
         
 var queryURL3 = "https://coinlib.io/api/v1/coin?key=" + "8894a69726e56135" + "&pref=EUR&symbol=BTC"

 $.ajax({
    url: queryURL3,
    method: "GET"
 }).then(function(response){
     console.log(response);
 });



});