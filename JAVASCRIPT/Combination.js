//QUESTION

// combinations(2, 3) ➞ 6
// combinations(3, 7, 4) ➞ 84
// combinations(2, 3, 4, 5) ➞ 120

//ANSWER

function combinations(...arr){
   return arr.reduce((total,value)=> total*value,1);
}

console.log(combinations(2,3))
console.log(combinations(3, 7, 4))
console.log(combinations(2, 3, 4, 5))