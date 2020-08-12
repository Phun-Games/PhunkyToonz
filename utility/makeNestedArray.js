const makeNestedArray = (array1, array2) => {
  const nestedArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    const innerArray = [];
    innerArray.push(array1[i]);
    innerArray.push(array2[i]);
    nestedArray.push(innerArray);
  }
  return nestedArray;
};


module.exports = makeNestedArray;

// const testArr1 = [1, 2, 3];
// const testArr2 = [4, 5, 6];
// const test = makeNestedArray(testArr1, testArr2);
// console.log(test);
// const testArr = [[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[23,24],[25,26],[27,28],[29,30],[31,32],[33,34]];
// const test = filterSongNames(testArr);
// console.log(test);