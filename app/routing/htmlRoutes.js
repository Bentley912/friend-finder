var path = require("path");

module.exports = function(app) {
   //routes go here
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

}
//===============================================================
