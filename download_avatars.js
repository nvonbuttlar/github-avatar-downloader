var request = require('request');
var fs = require('fs')

console.log('Welcome to the Best GitHub Avatar Downloader on the Web!');

function getRepoContributors(repoOwner, repoName, cb) {

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors: ", err);
  console.log("Result: ", result);
});