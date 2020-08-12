const playlistData = require('./playlistData');

// console.log('PLAYLISTDATA COLLABORATIVE*****', playlistData.collaborative);
// playlistData.tracks.items[0].track.preview_url

const listOfUrls = [];

playlistData.tracks.items.forEach((item) => {
  if (item.track.preview_url !== null) {
    // console.log(typeof item.track.preview_url);
    listOfUrls.push(item.track.preview_url);
  }
});

console.log('how many songs? ', listOfUrls.length);
console.log('songs ', listOfUrls);
console.log('firsttt    songs ', listOfUrls[0]);
// console.log('OBJECT KEYS*******', listOfUrls[0]);
// console.log('PLAYLIST URL*****', listOfUrls.length, listOfUrls);

// pushing into array turns the URLs into green strings, but if you isolate by element they turn white
