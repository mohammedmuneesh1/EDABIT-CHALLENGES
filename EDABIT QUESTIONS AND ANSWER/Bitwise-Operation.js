//QUESTION
// bitwiseAND(7, 12) ➞ 4
// bitwiseOR(7, 12) ➞ 15
// bitwiseXOR(7, 12) ➞ 11
//Direct bitwise operation on decimal number 


//ANSWER


const bitwiseAND=(n1,n2)=>  n1 & n2;
const bitwiseOR = (n1,n2)=> n1 | n2;
const bitwiseXOR =(n1,n2)=> n1 ^ n2;
console.log(bitwiseAND(7,12));
console.log(bitwiseOR(7,12));
console.log(bitwiseXOR(7,12));



//EXTERNAL
//padStart(8,'0')  8 total length;