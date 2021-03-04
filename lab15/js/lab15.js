/*
 * Author: Junyao Li & Zihan Guo
 * Created: 2021/3/4
 * License: Public Domain
 */
 
// Using the core $.ajax() method
$("#button").click(function(){
  var input = $("#input").val();
  var apiURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + input + "?redirect=true"
  console.log(input);
  console.log(apiURL);

  $.ajax({
    // The URL for the request (from the api docs)
    url: apiURL,
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            // id: 123,
            // api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        if (data.extract_html.indexOf("may refer to:") >= 0){
          $("#output").html("Maybe try to be more specific.");
        } else {
          $("#output").html(data.extract_html);
        }
        console.log(data);
      },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        $("#output").html("Maybe try something else.");
        console.log("Error:", textStatus, errorThrown);
    }
  })
});
