var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Yosemite",
		image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=325046642,3384663084&fm=26&gp=0.jpg",
		description: "Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white landscapes of the area."
	},
	{
		name: "Yosemite",
		image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=325046642,3384663084&fm=26&gp=0.jpg",
		description: "Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white landscapes of the area."
	},
	{
		name: "Yosemite",
		image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=325046642,3384663084&fm=26&gp=0.jpg",
		description: "Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white landscapes of the area."
	}
]

function seedDB(){
	Campground.remove({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log("Campgrounds removed...");
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err) {
					console.log(err);
				}
				else {
					console.log("Campground added...");
					Comment.create(
						{
							text: "I love this place, and I really want to go back there someday! ",
							author: "Declan"
						}, function(err, comment) {
							if(err) {
								console.log(err);
							}
							else {
								campground.comments.push(comment);
								campground.save();
								console.log("New comment added...");
							}
						}
					);
				}
			});
		});
	});
}

module.exports = seedDB;
