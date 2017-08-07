// server depenencies
import express from "express";
import bodyParser from "body-parser";
import logger from "logger";
import mongoose from "mongoose";

// require models schema
import model from "./models/model";

// create instance of express and set a port
var app = express();
var PORT = process.env.PORT || 3000;

// run morgan for logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
app.use(express.static("public"));

// MongoDB configuration
mongoose.connect("mongo://localhost/yourappnamehere");
var db = mongoose.connection;

db.on("error", (error) => {
    console.log("Mongoose Error: ", err);
});

db.once("open", () => {
    console.log("Mongoose connection successful.");
})

// listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
})