//QUESTION

//REVERSE THE INDIVIDUAL STRING WHICH HAS ODD NUMBER OF CHARACTERS
//console.log(reverseOdd("One two three four"))  enO owt eerht four;


//ANSWER
function reverseOdd(str){
    let arr = str.split(" ")
    let rev= [];
     for(value of arr){ 
        value.length %2 !=0 ?   rev.push(value.split("").reverse().join("")) : rev.push(value) 
     }
return rev.join(" ")
}
console.log(reverseOdd("One two three four"))