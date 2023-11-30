//QUESTION
// binary(1) ➞ "1"
// 1*1 = 1
// binary(5) ➞ "101"
// 1*1 + 1*4 = 5
// binary(10) ➞ "1010"
 // 1*2 + 1*8 = 10


 // ANSWER
function binary(decimal) {
	const num1 =decimal.toString(2);
    return num1
}
console.log(binary(10))
