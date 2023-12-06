// // getLength([1, [2, 3]])

// function getLength(arr){
// console.log(arr)
// // arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
// }
// // getLength([1, [2, 3]])

// getLength([1, [2, [3, [4, [5, 6]]]]])

const getLength =(arr)=>  (arr.flat(Infinity)).length;