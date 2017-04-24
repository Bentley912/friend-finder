var jquery = require("jquery");
var jsdom = require("jsdom");
var friends = [];



 $.ajax({
        url: "https://friend-finder.herokuapp.com/api/friends",
        method: 'GET',
      }).done(function(results){
        console.log(results);
      });