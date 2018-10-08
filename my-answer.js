//Basic JavaScript: Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic JavaScript: Stand in Line
function nextInLine(arr, item) {
  arr.push(item); // at this line, arr will equal [1, 2, 3, 4, 5]
  return arr.shift();
}
// Test Setup
var testArr = [1,2,3,4,5];
// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic JavaScript: Golf Code
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1){
    return "Hole-in-one!";
  } else if (strokes <= par - 2){
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Checkpoint: Counting Cards
var count = 0;
function cc(card) {
  // Only change code below this line
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count+=1;
      break;
    case 7:
    case 8:
    case 9:
      count+=0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count-= 1;
      break;
  }

  return count + (count > 0 ? " Bet" : " Hold");
  // Only change code above this line
}
cc(2); cc(3); cc(7); cc('K'); cc('A');





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic JavaScript: Profile Lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
    function lookUpProfile(name, prop){
    // Only change code below this line
        let message;
        for(let i = 0; i < contacts.length; i++){
            console.log("out", contacts[i].firstName);
            if(contacts[i].firstName === name){
                console.log("inside", contacts[i].firstName);
                if(contacts[i].hasOwnProperty(prop)){
                    message = contacts[i][prop];
                    break;
                }else{
                    message = "No such property";
                    break;
                }
            }else{
                message = "No such contact";
            }
        }
        console.log("message", message);
        return message;
        // Only change code above this line

    }
    // Change these values to test your function
    console.log(lookUpProfile("Bob", "potato"));


////////////////or anoteher answer////////////////////////
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(name, prop){
        var namecheck=0;
        for(var i=0; i<=contacts.length-1; i++) {
        if (contacts[i]["firstName"] === name) {
        namecheck = 1;
        }
        }
        for(var i=0;i<contacts.length;i++){
        if (contacts[i].firstName==name){
        //namecheck=1;
        if(contacts[i].hasOwnProperty(prop))
        return contacts[i][prop];
        else
        return "No such property" ;
        }
        if (namecheck==0)
        return "No such contact";
        }
        // Only change code above this line
        }

    // Change these values to test your function
    console.log(lookUpProfile("Bob", "potato"));




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ES6: Prevent Object Mutation
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
 Object.freeze(MATH_CONSTANTS);
  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ES6: se Arrow Functions to Write Concise Anonymous Functions
const magic =()=> {
  "use strict";
  return new Date();
};




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ES6: Write Arrow Functions with Parameters

const myConcat =(arr1, arr2) =>{
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5])); 





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ES6: Use the Rest Operator with Function Parameters
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
//ES6: Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);

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




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Debugging: Use Caution When Reinitializing Variables Inside a Loop
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
  }
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  console.log(newArray);
  return newArray;
}
let matrix = zeroArray(3, 2);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Add Items Using splice()
function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0,1,'DarkSalmon');
    console.log(arr);
    arr.splice(1,1,'BlanchedAlmond');
    // change code above this line
    return arr;
}
// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Copy Array Items Using slice()
function forecast(arr) {
    // change code below this line
    arr=arr.slice(2,4);
    return arr;
}
// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Copy an Array with the Spread Operator
function copyMachine(arr, num) {
    let myArr = [];
    let newArr = [...arr];
    while (num >= 1) {
        // change code below this line
        myArr.push(newArr);
        // change code above this line
        num--;
    }
    newArr=[...myArr];
    return newArr;
}
// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Combine Arrays with the Spread Operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let last=[ 'is', 'fun']
    let sentence=['learning',...fragment,...last]; // change this line
    return sentence;
}
// do not change code below this line
console.log(spreadOut());

//Basic Data Structures: Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
    // change code below this line
    if (arr.indexOf(elem) != -1) {
        return true;
    }
    return false
    // change code above this line
}
// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for ( let i = 0; i < arr.length; i++) {
        let myArr= [...arr[i]];
        let check=0;
        for (let j = 0; j < myArr.length; j++) {
            if (myArr[j] == elem) {
                check=1;
            }
        }
        if(check==0){
            newArr.push(myArr);
        }
    }
    // change code above this line
    return newArr;
}
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 7], [3, 13, 26], [19, 3, 9]], 3));

//Basic Data Structures: Create complex multi-dimensional arrays
let myNestedArray = [ // top, or first level - the outer most array
    ['false'], // an array within an array, 2 levels of depth
    [
        ['true']// 2 arrays nested 3 levels deep
    ],
    [
        [
            [
                ['deepest'] // an array nested 5 levels deep
            ]
            ,
            ['deeper']
        ]
    ],
    [
        ['deep'] // 2 arrays nested 4 levels deep
    ],
];