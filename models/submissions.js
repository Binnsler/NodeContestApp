var allSubmissions = [];
var count = 0;

var Submission = function(name, youtubeUrl, title, description){
	// Unique data-id for each submission
	count++;

	this.name = name;
	this.youtubeUrl = youtubeUrl;
	this.title = title;
	this.description = description;
	this.votes = 0;
	this.data-id = count;

}

var addSubmission = function(name, youtubeUrl, title, description){

	var newSubmission = new Submission(name, youtubeUrl, title, description);

	allSubmissions.push(newSubmission);
}

module.exports = {
	allSubmissions : allSubmissions,
	addSubmission : addSubmission
}