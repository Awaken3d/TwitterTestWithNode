console.log('testing');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var fs = require('fs');

var stream = T.stream('statuses/filter', { track: ['#Java'],language: 'en' });

stream.on('tweet', function (tweet) {
    fs.appendFile("./tweets", tweet.text+"\n", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
  console.log(tweet.text);
});
