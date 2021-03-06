// server depenencies
var express = require("express"); 
var bodyParser = require("body-parser"); 
var logger = require("morgan"); 
var mongoose = require("mongoose");
var routes = require("./config/api-routes");

// require models schema
var model = require("./models/model");

// create instance of express and set a port
var app = express();
var PORT = process.env.PORT || 8080;

// run morgan for logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
app.use(express.static("public"));

// MongoDB configuration
mongoose.connect("mongodb://localhost/yourappnamehere");
var db = mongoose.connection;

db.on("error", function(error){
    console.log("Mongoose Error: ", error);
});

db.once("open", function(){
    console.log("Mongoose connection successful.");
})

// routes(app);

// listener
app.listen(PORT, function(){
    console.log("app listening on port: " + PORT);
});