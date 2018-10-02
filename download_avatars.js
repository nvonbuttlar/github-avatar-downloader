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

  request(options, function(err, res, body) {

    var parsedJSON = JSON.parse(body);

    cb(err, parsedJSON);


  });

}


getRepoContributors("jquery", "jquery", function(err, results) {


  console.log("Errors: ", err);

  results.forEach(function(result){
    console.log(result.avatar_url);
  })


});