
//QUESTION

// IF A BIKE TRAVEL 50 KILOMETER USING 1 LITER PETROL , THEN HOW MUCH LITER PETROL WOULD IT NEED TO TRAVEL 32.5 KILOMETER
// HINT
// (distance1/liter) = (distance2/liter)
// 50/1 = 32.5/X            
//X= TRAVELLEDkILOMETER/GOT KILOTMETER


const obj = {travelledKilometer:50,liter:1,literCost:"109 ruppees"}
const kilometerToTravel=32.5

function mileageCheck(obj1,kilometerToTravel1){
    
    let obj={kilometerToTravel1}
    const literRequiredToTravel = kilometerToTravel/obj1.travelledKilometer;
    obj={...obj,literRequiredToTravel}
    console.log(obj)
   const oneLiterCost = parseFloat((obj1.literCost).match(/\d+/)[0])
   const travelCostRequiredToTravel = literRequiredToTravel * oneLiterCost;
   obj={...obj,travelCostRequiredToTravel}
   return obj;

    // console.log(literCost)
// console.log((obj1.literCost).match(/\d+/))
}
console.log(mileageCheck(obj,kilometerToTravel))

