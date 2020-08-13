const selectedSongs = (array) => {
  const selected = [];
  const songsArray = array;
  let max = songsArray.length;
  for (let i = 0; i < 9; i += 1) {
    const randomNum = getRandomInt(max);
    // songsArray[randomNum] = [...songsArray[randomNum], randomNum];
    // selected.push(songsArray[randomNum]);
    selected.push([...songsArray[randomNum], randomNum]);

    songsArray.splice(randomNum, 1);
    max -= 1;
  }
  return selected;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


module.exports = selectedSongs;

const testArr = [[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[23,24],[25,26],[27,28],[29,30],[31,32],[33,34]];
const test = selectedSongs(testArr);
console.log(test);
