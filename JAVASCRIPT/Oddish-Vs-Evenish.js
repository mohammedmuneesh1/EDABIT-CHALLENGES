//QUESTION
// oddishOrEvenish(43) ➞ "Oddish"  4 + 3 = 7                7 % 2 = 1
//oddishOrEvenish(373) ➞ "Oddish"  3 + 7 + 3 = 13           13 % 2 = 1
//oddishOrEvenish(4433) ➞ "Evenish"   4 + 4 + 3 + 3 = 14    14 % 2 = 0


//TWO ANSWERS 
//ANSWER-1
function oddishOrEvenish(num) {
    const sum = num.toString().split("").reduce((total, value) => total + parseInt(value), 0);
    return sum % 2 === 0 ? "Evenish" : "Oddish";
}

//ANSWER-2
function oddishOrEvenish(num){
    let sum = 0;
    const numarr = num.toString().split("").map(value=>{
        return parseInt(value);
    })
    for(value of numarr){
        sum+=value;
    }
    return sum %2 === 0 ? "Evenish" :"Oddish";
}
console.log(oddishOrEvenish(73))
console.log(oddishOrEvenish(4433))
console.log(oddishOrEvenish(373))