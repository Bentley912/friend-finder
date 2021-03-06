// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./routing/apiRoutes");
var htmlRoutes= require("./routing/htmlRoutes");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
htmlRoutes(app);
apiRoutes(app);



// Routing 
//==============================================================


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(err) {
    if (err) throw err;
  console.log("App listening on PORT " + PORT);
});