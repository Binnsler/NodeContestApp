// Bring in the submissions array
var submissions = require('../models/submissions.js')

var indexController = {

	// Render homepage form for submitting videos
	index: function(req, res) {
		res.render('index', {theSubmissions : submissions.allSubmissions});
	},

	// Render all the videos on the submissions page
	submissions: function(req, res){
		res.render('submissions', {theSubmissions : submissions.allSubmissions})
	},

	// Take in form data and create a new submission unless
	// there are already 8
	submit: function(req, res){

		if(submissions.allSubmissions.length < 8){
			var videoName = req.body.videoName;
			var videoUrl = req.body.videoUrl;
			var videoTitle = req.body.videoTitle;
			var videoDescription = req.body.videoDescription;

			submissions.addSubmission(videoName, videoUrl, videoTitle, videoDescription);
			res.redirect('submissions');
		}
		else{
			res.redirect('contest-full');
		}
	},

	// Soften the blow
	contestFull: function(req, res){
		res.render('contest-full');
	},

	// Increment the vote
	vote: function(req, res){
		
	}
};

module.exports = indexController;