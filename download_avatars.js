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

  for (var key in results) {
    downloadImageByURL(results[key].avatar_url, "avatars/" + results[key].login + ".png")
  }

});


function downloadImageByURL(url, filePath) {

  request.get(url)

  .on('error', function(err) {
    console.log('ERROR! ERROR! ERROR!')
  })

  .on('response', function(response) {
    console.log('Response Status Code: ', response.statusCode);
    console.log('Status Message: ', response.statusMessage);
    console.log('Downloading image...')

  })

  .on('end', function() {
    console.log('Download complete.');
  })


  .pipe(fs.createWriteStream(filePath));

}

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");





