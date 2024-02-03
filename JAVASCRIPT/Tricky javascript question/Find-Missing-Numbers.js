//QUESTION

//  originalArray = [1,2,3,4,5,6,7,8,9,10]
//  missingElementArray = [1,2,3,5,7,8,10]
//Expected output =   "missing elements are [4,6,9]"

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//METHOD-1
function missingElementFn(missingArray) {
  return originalArray.filter((value) => !missingArray.includes(value));
}
console.log(missingElementFn([1, 2, 3, 5, 7, 8, 10])); //OUTPUT WILL BE : [4,6,9]

//METHOD-2
function missingElementFn2(missingArray) {
  const result = [];
  for (x of originalArray) {
    if (!missingArray.includes(x)) {
      result.push(x);
    }
  }
  return result;
}
console.log(missingElementFn([1, 2, , 5, 7, 8, 10])); //OUTPUT WILL BE : [3,4,6,9]
