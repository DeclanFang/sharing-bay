var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sharing_bay", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// schema setup
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
	Campground.find({}, function(err, allCampgrounds) {
		if (err) {
			console.log(err);
		}
		else {
			res.render("campgrounds", {campgrounds: allCampgrounds});
		}
	})
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
	var description = req.body.description;
    var newCampground = {
        name: name,
        image: image,
		description: description
    };
	Campground.create(newCampground, function(err, newlyCreated) {
		if (err) {
			console.log(err);
		}
		else {
			res.redirect("/campgrounds");
		}
	})
})

app.get("/campgrounds/:id", function(req, res) {
	Campground.findById(req.params.id, function(err, foundCampground) {
		if (err) {
			console.log(err);
		}
		else {
			res.render("show", {campground: foundCampground});
		}
	});
})

app.listen(3000, process.env.IP, function(){
    console.log("The server is listening on port 3000 or GoormIDE's port, so please go to check http://localhost:3000 or contact the admin");
});