var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var seedDB = require("./seeds");

mongoose.connect("mongodb://localhost/sharing_bay", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

seedDB();

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
	Campground.find({}, function(err, allCampgrounds) {
		if (err) {
			console.log(err);
		}
		else {
			res.render("campgrounds/campgrounds", {campgrounds: allCampgrounds});
		}
	})
});

app.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new");
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
	});
});

app.get("/campgrounds/:id", function(req, res) {
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
		if (err) {
			console.log(err);
		}
		else {
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
});

app.get("/campgrounds/:id/comments/new", function(req, res){
	Campground.findById(req.params.id, function(err, campground){
		if(err) {
			console.log(err);
		}
		else {
			res.render("comments/new", {campground: campground});
		}
	});
});

app.post("/campgrounds/:id/comments", function(req, res){
	Campground.findById(req.params.id, function(err, campground){
		if(err) {
			console.log(err);
			res.redirect("/campgrounds");
		}
		else {
			Comment.create(req.body.comment, function(err, comment){
				if(err) {
					console.log(err);
				}
				else {
					campground.comments.push(comment);
					campground.save();
					res.redirect("/campgrounds/" + campground._id);
				}
			});
		}
	});
});

app.listen(3000, process.env.IP, function(){
    console.log("The server is listening on port 3000 or GoormIDE's port, so please go to check http://localhost:3000 or contact the admin");
});