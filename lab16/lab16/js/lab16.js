/*
 * Author: Junyao Li & Zihan Guo
 * Created: 2021/2/17
 * License: Public Domain
 */

//Create function
// var maxNums = document.getElementById("maxNums");
// var button = document.getElementById("my-button");
var comicObj = {} ;

function getAndPutData(apiURL){$.ajax({
    // The URL for the request (from the api docs)
    url: apiURL,
    // The data to send (will be converted to a query string)
    data: { },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        comicObj = data;
        $('#output-image').html("<h2>" + data.title + "</h2>" +"<img src = '" + data.img + "' title= '" + data.alt + "'>");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
});
}

 getAndPutData("https//xkcd.com/614/info.0.json");

 // $(#'#backward').click(function(){
 //   var comicNum = comicObj.num - 1;
 //   var newUrl = "http://xkcd.com/"+ comicNum+"/info.0.json";
 //   getAndPutData(newUrl);
 // })
