//     QUESTION 
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
  ]))  //OUTPUT :1.5
  console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 3, price: 2.50 }
  ])) //OUTPUT:9
  console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ])) //OUTPUT:10.4
  console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
  ]))  //OUTPUT:0.3


//ANSWER
function getTotalPrice(arr){
    return parseFloat(arr.reduce((total, value) => total + value.quantity * value.price, 0).toFixed(2));
}
//NOTES
//toFixed(2) used to round the decimal into 2 ex:123.56 . It will be in string , so we need to convert it into digit using parseFloat()
