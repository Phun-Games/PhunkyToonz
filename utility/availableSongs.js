const availableSongs = (obj) => {
  const list = [];
  const songsArray = obj.tracks.items;
  songsArray.forEach((song) => {
    if (song.track.preview_url !== null) {
      const eachSong = [];
      eachSong.push(song.track.name)
      eachSong.push(song.track.preview_url);

      list.push(eachSong);
    }
  });
  return list;
};


module.exports = availableSongs;
