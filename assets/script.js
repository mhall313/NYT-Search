//To remove any potential syncing issues on load
$(document).ready(function(){

var searchTerm = "us";
var APIkey = "XH478zGX5cbqVyjYLO4MAVbbq6HxPyPo";
var queryURL = "https://api.nytimes.com/svc/topstories/v2/" + searchTerm + ".json?api-key=" + APIkey;

  $("#search-button").on("click", function() {
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        console.log(queryURL);
        console.log(response);

    })
  })
});
