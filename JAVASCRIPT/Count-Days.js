//QUESTION

//Create a function that takes two dates and returns the number of days between the first and-second date.
// console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));  output:6
// console.log( getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))); output:3
  

//ANSWER
function getDays(d1, d2) {
  let timediff = d2.getTime() - d1.getTime(); //timeDifference in milliseconds
  let oneDaySeconds = 60 * 60 * 24; // calculating seconds in 24 Hours
  //there are 1000 milliseconds in one seconds . so multiply oneDaySeconds with 1000 it will give 86400000
  let day = Math.ceil(timediff / (oneDaySeconds * 1000));
  return day;
}
console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
console.log(getDays(new Date("December 29, 2018"), new Date("January 1, 2019")));
