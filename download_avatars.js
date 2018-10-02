var request = require('request');
var fs = require('fs')

console.log('Welcome to the Best GitHub Avatar Downloader on the Web!');

function getRepoContributors(repoOwner, repoName, cb) {

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request'
    }
  };

  request(url, function(err, res, body) {
    cb(err, body);

  });

}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors: ", err);
  console.log("Result: ", result);
});