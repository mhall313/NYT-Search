//To remove any potential syncing issues on load
$(document).ready(function(){
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

var APIkey = "XH478zGX5cbqVyjYLO4MAVbbq6HxPyPo";
var queryURL = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=" + APIkey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response);

}
