// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.






function sevenBoom(arr) {
    let nums = arr.join("").toString();
    if(nums.includes('7')) return "Boom!"
    else return "there is no 7 in the array"
}
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([5,8,8,45]))
