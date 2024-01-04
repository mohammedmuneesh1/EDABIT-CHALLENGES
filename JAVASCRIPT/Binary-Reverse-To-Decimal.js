// QUESTION

// reversedBinaryInteger(10) ➞ 5
// // 10 = 1010 -> 0101 = 5

//ANSWER

function reversedBinaryInteger(num){
    return parseInt(num.toString(2).split("").reverse().join("") ,2); 
}
console.log(reversedBinaryInteger(10))