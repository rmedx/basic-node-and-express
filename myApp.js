var express = require('express');
var app = express();
require('dotenv').config();
console.log("Hello World");

// middleware that logs for all routes
app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res){
    let message;
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = "HELLO JSON";
    } else {
        message = "Hello json";
    }
    res.json({"message": message});
});

app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    next();
},  function(req, res) {
    res.send({time: req.time});
})

app.get("/:word/echo", (req, res) => res.send({echo: req.params.word}))



















 module.exports = app;
