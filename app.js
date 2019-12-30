var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.listen(3000, process.env.IP, function(){
    console.log("The SharingBay server has started...");
    console.log("The server is listening on port 3000, so please go to check http://localhost:3000");
});