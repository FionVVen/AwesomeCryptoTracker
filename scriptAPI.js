$(document).ready(function (){ 

    var queryURL = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=" + "29de9466349c2dc423012d112499f0d56886e082d2617b7f779b44abe3b379c1"

    function runQuery(numArticles,queryURL){
        $.ajax({
            url: queryURL,
            method: "GET"
         }).then(function(response){
            console.log(response);
            //log length of articles 
            var articleLength = response.Data.length; 
            console.log(articleLength);
            //variable to hold news article ([0] to be replaced by [i])
            for (var i = 0; i < 10; i++) {
            var articleData = response.Data[i];
            console.log(articleData);
            //hold data to be displayed
            var articleTitle = response.Data[i].title;
            console.log(articleTitle);
            var articleBody = response.Data[i].body;
            console.log(articleBody);
            var articleCategories = response.Data[i].categories;
            console.log(articleCategories)
            var articleURL = response.Data[i].url;
            console.log(articleURL);
            var articlePhoto = response.Data[i].imageurl;
            console.log(articlePhoto);
            //var articlePublished = response.Data[1].published_on;
            //console.log(articlePublished);
            var articleSource = response.Data[i].source;
            console.log(articleSource);
            //put into html
            var wellSection = $("<div>");
            wellSection.addClass("w3-card-4");
            wellSection.attr("id","articleWell-"+ i);
            $("#wellSection").append(wellSection);
            //attach comment to appropriate well 
            $("#articleWell-"+i).append("<h3 class = 'w3-container w3-light-grey'>" + articleTitle + "</h3>");
            $("#articleWell-"+i).append("<h4>" + articleCategories + "</h4>");
            $("#articleWell-"+i).append("<img src =" + articlePhoto + ">");
            $("#articleWell-"+i).append("<p>" + articleBody + "</p>");
            $("#articleWell-"+i).append("<a href = '"+articleURL+"' class='link'>" + articleURL + "</a>");
            //$("#articleWell-"+i).append("<h4>" + articleCategories + "</h4>");
            //$("#articleWell-"+i).append("<img src =" + articlePhoto + ">");
    

            }

         });
    }

    $('#searchBtn').on("click",function(){
        runQuery(10, queryURL);


    });

    //var numArticles 

    

    var numArticles = 10; 
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

var todoInput = document.querySelector("#Article-text");
var todoForm = document.querySelector("#Article-form");
var todoList = document.querySelector("#aArticle-list");
var todoCountSpan = document.querySelector("#Article-count");

updatePage();

// //get data for price etc. 
// var queryURL2 = "https://coinlib.io/api/v1/coinlist?key=" + "8894a69726e56135" + "&pref=BTC&page=1&order=rank_asc";

// $.ajax({
//     url: queryURL2,
//     method: "GET"
//  }).then(function(response){
//      console.log(response);

//      var apiCoins = response.coins;
//      console.log(apiCoins);

//      var coinName = response.coins[0].name;
//      console.log(coinName);

//      var coinPrice = response.coins[0].price;
//      console.log(coinPrice);

//      var coinRank = response.coins[0].rank;
//      console.log(coinRank);

//      var coinVolume = response.coins[0].volume_24h;
//      console.log(coinVolume);

//      var coinDelta = response.coins[0].delta_24h;
//      console.log(coinDelta);
//  });
         
//  var input = "BTC"
//  var queryURL3 = "https://coinlib.io/api/v1/coin?key=" + "8894a69726e56135" + "&pref=EUR&symbol=" + input; 

//  $.ajax({
//     url: queryURL3,
//     method: "GET"
//  }).then(function(response){
//      console.log(response);
//  });



});