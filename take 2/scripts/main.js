// var str = "FirstLine\n\\Second Line\\\rThirdLine"

// console.log(str);

// var lastName = "Aguayo"

// console.log(lastName[lastName.length - 1])

// function reuseableFunction() {
//   console.log("Hi World");
// }

// reuseableFunction();


// Setup
// var outerWear = "T-Shirt";

// function myOutfit() {
//   // Only change code below this line
//   var outerWear = "sweater"
  
//   console.log(outerWear);
//   // Only change code above this line
//   return outerWear;
// }

// console.log(outerWear);

// function timesFive(num) {
// 	return num * 5;
// }

// console.log(timesFive(4));

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  arr.shift();
  
  return arr;  // Change this line
}

console.log(nextInLine([1,2,3,4], 5))

