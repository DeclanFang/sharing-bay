var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {
        name: "Yosemite",
        image: "https://static01.nyt.com/images/2018/11/11/travel/11yosemite2/merlin_145320882_abb47a0c-1a15-402a-8d30-9dcb7073e46b-superJumbo.jpg"
    },
    {
        name: "Yellow Stone",
        image: "https://travelwyoming.com/wp-content/uploads/2019/09/Hero-National-Park-YS.jpg"
    },
    {
        name: "Pacific Crest Trail",
        image: "https://photos.thetrek.co/wp-content/uploads/2019/02/18145836/Pacific_Crest_Trail_Mount_Rainier.jpg"
    }
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    };
    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
})

app.listen(3000, process.env.IP, function(){
    console.log("The SharingBay server has started...");
    console.log("The server is listening on port 3000 or IDE's port, so please go to check http://localhost:3000 or contact the admin");
});