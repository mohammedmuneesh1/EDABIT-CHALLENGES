//QUESTION

//addUp(4) ➞ 10      1+2+3+4 = 10

//ANSWER 

function addUp(num){
    let sum = 0;
    for(i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}
addUp(4)