var path = require("path");
var friends = require("../data/friends.js");



module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    })
    app.post("/api/friends", function(req,res){
        var userData = req.body;
        var totalDifference =0;
            var values = [];
            var result;
        for (var i =0; i <friends.length;i++){
            var friend = friends[i];
            
            for (var j = 0; j<friend.scores.length; j++){
                 result = Math.abs(userData.scores[j] - friends[i].scores[j]);
                values.push(result);
                console.log(values);   
            }

            
        }
        // console.log(userData.scores);
        // console.log(friends[2].scores);
    })
}