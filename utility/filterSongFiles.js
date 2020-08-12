const filterSongFiless = (array) => {
  const songFiles = [];

  for (let i = 0; i < array.length; i += 1) {
    songFiles.push(array[i][1]);
  }
  return songFiles;
};


module.exports = filterSongFiless;

// const testArr = [[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[23,24],[25,26],[27,28],[29,30],[31,32],[33,34]];
// const test = filterSongFiless(testArr);
// console.log(...test);
