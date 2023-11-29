// QUESTION


// There are three towers.
//  The objective of the game is to move all the disks over to tower #3, 
//  but you can't place a larger disk onto a smaller disk. To play the game or
//   learn more about the Tower of Hanoi, check the Resources tab.
//   towerHanoi(3) ➞ 7
// towerHanoi(5) ➞ 31
// towerHanoi(0) ➞ 0


//SOLUTION
//he solution to the Tower of Hanoi puzzle for a given number of discs can be calculated using the formula:[  2^n - 1   ] n= No of Discs


function towerHanoi(discs){
    return Math.pow(2,discs)-1
}

console.log(towerHanoi(2))
console.log(towerHanoi(3))