var Spotify = require('node-spotify-api');
var songname = "Mirrors"
var spotify = new Spotify({
  id: "1e98911be872499cb7cf8a8e3ea031e2",
  secret: "e9231fba77d547a58746cbfd139368e2"
});
 
spotify
  .search({ type: "track", query: songname, limit:1 })
  .then(function(response) {
    console.log(response.tracks.items[0].artists[0].name);
    console.log(response.tracks.items[0].name);
    console.log(response.tracks.items[0].preview_url);
    console.log(response.tracks.items[0].album.name);
  })
  .catch(function(err) {
    console.log(err);
  });

