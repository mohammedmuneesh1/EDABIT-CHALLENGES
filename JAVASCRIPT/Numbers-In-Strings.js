//QUESTION
//Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]

//TWO ANSWERS   

//ANSWER-1 USING REGULAR EXPRESSION 
function numInStr(arr){
    let result = [];
    let len = arr.length;
    for(let i=0;i<len;i++){
        if(/\d/.test(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}
numInStr(["1a", "a", "2b", "b"]);

//  /\d/  \d is an regular expression pattern match digit [0-9]
//test() is an method to check the regular expression matching return true or false 


//ANSWER-2 USING UNICODE  

// function numInStr(strings) {
//     return strings.filter(str => {
//       for (let char of str) {
//         if (char >= '0' && char <= '9') {  //unicode digit checking 
//           return true; 
//         }
//       }
//       return false; // No digit found
//     });
//   }
// console.log(numInStr(["1a",'b','c2']))



//UNICODE OF '0'-'9' is  48-57
// console.log('0'.codePointAt(0))
//filter function expect true or false
