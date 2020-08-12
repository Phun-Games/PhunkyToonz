const playlistData = require('./playlistData');


// playlistData.tracks.items[0].track.preview_url
// console.log(playlistData.tracks.items[44].track.preview_url);
// console.log(playlistData.tracks.items[44].track.name)
const listOfUrls = [];

playlistData.tracks.items.forEach((item) => {
  if (item.track.preview_url !== null) {

    const eachSong = [];
    eachSong.push(item.track.name);
    eachSong.push(item.track.preview_url);
    // eachSong[item.track.name] = item.track.preview_url;
    listOfUrls.push(eachSong);
    // console.log(typeof item.track.preview_url);
    // listOfUrls.push(item.track.preview_url);
  }
});

console.log('how many songs? ', listOfUrls.length);
// console.log('songs ', listOfUrls);
console.log('first song: ', typeof listOfUrls[0]);
console.log((listOfUrls[0][1]));
// console.log('OBJECT KEYS*******', listOfUrls[0]);
// console.log('PLAYLIST URL*****', listOfUrls.length, listOfUrls);

// pushing into array turns the URLs into green strings, but if you isolate by element they turn white

const rnd = Math.random() * 10;
console.log(rnd);