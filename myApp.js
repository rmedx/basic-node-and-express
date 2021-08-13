var express = require('express');
var app = express();
console.log("Hello World");
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => res.json({"message": "Hello json"}));

























 module.exports = app;
