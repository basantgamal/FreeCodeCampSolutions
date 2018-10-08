//ES6: Write Higher Order Arrow Functions
//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/write-higher-order-arrow-functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -9];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((arr) => Number.isInteger(arr) && arr > 0).map((arr) => arr = arr * arr);
  //const squaredIntegers = arr.map((arr) => arr = arr * 2);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
document.write(squaredIntegers);




//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-the-rest-operator-with-function-parameters
//ES6: Use the Rest Operator with Function Parameters
const sum = (function() {
  "use strict";
  return function sum(...args) {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
console.log(sum(1,2,3,4)); //10





//ES6: Use Destructuring Assignment to Assign Variables from Objects
//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-objects/
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const today=AVG_TEMPERATURES.today;
  const  {tomorrow:tempOfTomorrow}=avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79



//ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-operator-to-reassign-array-elements/
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [,,...arr]=list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];