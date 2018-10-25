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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Add Key-Value Pairs to JavaScript Objects
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,

};
let bananas = foods['bananas']=13;
let grapes = foods['grapes']=35;
let strawberries = foods['strawberries']=27;
// change code below this line
foods.bananas=13;
// change code above this line
console.log(foods);







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Modify an Object Nested Within an Object
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
// change code below this line
let online = userActivity.data['online']=45;
// change code above this line
console.log(userActivity);







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Access Property Names with Bracket Notation
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
// do not change code above this line
function checkInventory(scannedItem) {
    // change code below this line
    let inventory = foods[scannedItem];
    return inventory;
}
// change code below this line to test different cases:
console.log(checkInventory("apples"));






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Use the delete Keyword to Remove Object Properties
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
// change code below this line
delete foods.strawberries;
delete foods.oranges;
delete foods.plums;
// change code above this line
console.log(foods);






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Check if an Object has a Property
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function isEveryoneHere(obj) {
    // change code below this line
    let check= users.hasOwnProperty('Alan');
    return check;
    // change code above this line
}
console.log(isEveryoneHere(users));







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function countOnline(obj) {
    // change code below this line
    let counter=0;
    for (let user in obj) {
        if(obj[user].online===true){
            counter++;
        }

    };
    console.log(counter)
    return counter;
    // change code above this line
}
countOnline(users);







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Generate an Array of All Object Keys with Object.keys()
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function getArrayOfUsers(obj) {
    // change code below this line
    let array=Object.keys(obj);
    console.log(array);
    return array;
    // change code above this line
}
console.log(getArrayOfUsers(users));







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Data Structures: Modify an Array Stored in an Object
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};
function addFriend(userObj, friend) {
    // change code below this line
    userObj.data.friends.push(friend);
    let array= userObj.data.friends;
    console.log(array);
    return array;
    // change code above this line
}
console.log(addFriend(user, 'Pete'));






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit;
    fahrenheit=celsius*(9/5)+32;
    return fahrenheit;
}
convertToF(30);






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Reverse a String
function reverseString(str) {
    let myString="";
    for (var i= str.length-1; i >=0 ; i--) {
        myString+=str[i];
    }
    return myString;
}
reverseString("hello");
// or
function reverseString(str) {
    let reversed = "";
    for(let char of str){
        reversed = char + reversed;
    }
    return reversed;
}
reverseString("hello");
// or
function reverseString(str) {
    return [...str].reverse().join('');
}
reverseString("hello");






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Factorialize a Number
function factorialize(num) {
    if(num <= 1) {
        return 1
    } else {
        return num * factorialize(num-1)
    }
}
factorialize(5);
// or
function factorialize(num) {
    var factor = 1;
    for (var i = 1; i <= num ; i++) {
        factor *= i;
    }
    return factor;
}
console.log(factorialize(5));





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Find the Longest Word in a String
function findLongestWordLength(str) {
    let myString=[...str];
    myString.push(' ');
    let counter=0;
    let myLong=0;
    console.log(myString)
    for(let i=0;i<myString.length;i++){
        counter++;
        if(myString[i]==' '){
            if(counter>myLong){
                myLong=counter-1;
            }
            counter=0;
        }
    }
    console.log(myLong);
    return myLong;
}
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Return Largest Numbers in Arrays
function largestOfFour(arr) {
// You can do this!
let counter;
let myArray=[];
let myLong;
for(let i=0;i<arr.length;i++){
    myLong=arr[i][0];
    for(let j=0;j<=arr[i].length;j++){
        if(arr[i][j]>myLong){
            myLong=arr[i][j];
        }

    }
    myArray.push(myLong);
}
console.log(myArray)
return myArray;
}
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Confirm the Ending
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let check= str.endsWith(target);
    return check;
}
confirmEnding("Bastian", "n");
// or
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    let myArray=[...str];
    let targetArray=[...target];
    let j=myArray.length-1;
    let check=true;
    for(let i=targetArray.length-1 ;i>=0;i--){
        if(myArray[j]!=targetArray[i]){
            check=false;
        }
        j--;
    }
    console.log(myArray);
    console.log(targetArray);
    console.log(check);
    return check;
}
confirmEnding("Bastian", "6n");




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
// repeat after me
let myString='';
if(num>=0){
    for(let n=0;n<num;n++){
        myString+=str;
    }
}
console.log(myString)
return myString;
}
repeatStringNumTimes("abc", -2);






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Truncate a String
function truncateString(str, num) {
    // Clear out that junk in your trunk
    let target='';
    let word='';
    if(num>=str.length){
        word=str;
    }
    else{
        for(let i=0;i<str.length-1;i++){
            target += str[i];
            if(target.length==num){
                word=target+'...';
                break;
            }
        }
    }
    console.log(word);
    return  word;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8)





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Finders Keepers
function findElement(arr, func) {
    let num ;
    for(let i=0;i<arr.length;i++){
        if(func(arr[i]) ){
            num = arr[i];
            return num;
        }
    }
    console.log(num);
    return num;
}
findElement([1, 2, 3, 4], function(num) {
    return num % 2 === 0;
});
findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Boo who
function booWho(bool) {
    return typeof bool === 'boolean';
}
booWho(true);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Title Case a Sentence

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
titleCase("I'm a little tea pot");





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Slice and Splice
function frankenSplice(arr1, arr2, n) {

    // It's alive. It's alive!
    let arrCopy = arr2.slice();
    arrCopy.splice(n, 0, ...arr1);
    return arrCopy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Falsy Bouncer
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Mutations
function mutation(arr) {
    return arr[1].toLowerCase()
        .split('')
        .every(function(letter) {
            return arr[0].toLowerCase()
                .indexOf(letter) !== -1;
        });
}
mutation(["hello", "hey"]);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Algorithm Scripting: Chunky Monkey
function chunkArrayInGroups(arr, size) {
    var arraySize  = arr.length/size;
    var newArray = [];
    for (var i = 0; i < arraySize ; i++){
        var subArray= arr.splice(0,size);
        newArray.push(subArray);
    }
    return newArray;
}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Sum All Numbers in a Range
function sumAll(arr) {
    let sum=0;
    let first=arr[0];
    let last=arr[1];
    console.log(first);
    console.log(last);
    if(last<first){
        let m;
        m=first;
        first=last;
        last=m;
        console.log(first);
        console.log(last);
    }
    for (let j=last;j>=first;j--){
        sum=sum+j;
    }
    return sum;
}
console.log(sumAll([4, 1]));





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Intermediate Algorithm Scripting: Diff Two Arrays
function diffArray(arr1, arr2) {
    let newArr = [];
    function onlyInFirst(first, second) {
        // Looping through an array to find elements that don't exist in another array
        for (let i=0;i<first.length;i++) {
            if (second.indexOf(first[i]) === -1) {
                // Pushing the elements unique to first to newArr
                newArr.push(first[i]);
            }
        }
        // for (let i=0;i<second.length;i++) {
        //     if (first.indexOf(second[i]) === -1) {
        //         // Pushing the elements unique to first to newArr
        //         newArr.push(first[i]);
        //     }
        // }
    }
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    console.log(newArr)
    return newArr;
}
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Seek and Destroy
//To convert arguments into an array use this code var args = Array.prototype.slice.call(arguments);
function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    console.log(arr.filter(Boolean));
    return arr.filter(Boolean);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3)






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Wherefore art thou
function whatIsInAName(collection, source) {
var srcKeys = Object.keys(source);

return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
        console.log(key);
        return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
});
}
// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//or
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    arr = collection.filter(function(obj) {
        var srcKeys = Object.keys(source);
        var test = 0;
        for (var i = 0; i < srcKeys.length; i++) {
            if (obj.hasOwnProperty(srcKeys[i]) && obj[srcKeys[i]] === source[srcKeys[i]]) {
                test += 1;
            } else {
                test += -1;
            }
        }
        return test === srcKeys.length;
    });
    // Only change code above this line
    return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Spinal Tap Case
function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    console.log(str.replace(regex, '-').toLowerCase())

    // Replace space and underscore with -
    return str.replace(regex, '-').toLowerCase();
}
// test here
spinalCase('This Is Spinal Tap');






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Pig Latin
function translatePigLatin(str) {
    var length = str.length;
    var tab = [];
    if(str.match(/[aeiou]/gi) === null) {
// Check if the string contains only consonants
        var temp;
        temp= str + 'ay';
        return temp;
    }
    for(var i=0; i<length; i++){
        var first = str.charAt(i);
//voyelle
        if(first === "a" || first === "e" || first === "i" || first === "o" || first === "u" || first === "y"){
            if(i === 0){
                str = str + "way";
            }
            else{
                str = str.substring(i) + tab.join("") + "ay";
            }
            break;
        }
//consonne
        else{
            tab.push(first);
        }
    }
    return str;
}
console.log(translatePigLatin("consonant"));







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: DNA Pairing
function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var paired = [];
    // Function to check with strand to pair.
    var search = function(char) {
        switch (char) {
            case 'A':
                paired.push(['A', 'T']);
                break;
            case 'T':
                paired.push(['T', 'A']);
                break;
            case 'C':
                paired.push(['C', 'G']);
                break;
            case 'G':
                paired.push(['G', 'C']);
                break;
        }
    };
    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
        search(str[i]);
    }
    return paired;
}
// test here
pairElement("GCG");






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Missing letters

function fearNotLetter(str) {
    for(var i = 0; i < str.length; i++) {
        /* code of current character */
        var code = str.charCodeAt(i);
        /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
        if (code !== str.charCodeAt(0) + i) {
            /* if current character has escaped one character find previous char and return */
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}
// test here
fearNotLetter("abce");






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sorted Union
function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    var finalArray = [];

    // Loop through the arguments object to truly made the program work with two or more arrays
    // instead of 3.
    for (var i = 0; i < arguments.length; i++) {
        var arrayArguments = arguments[i];

        // Loops through the array at hand
        for (var j = 0; j < arrayArguments.length; j++) {
            var indexValue = arrayArguments[j];

            // Checks if the value is already on the final array.
            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }

    return finalArray;
}
// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    var a = 1, b = 1, sum = 0;
    while (a <= num && b <= num) {
        if (a%2 !== 0)
            sum+=a;
        if (b%2 !== 0)
            sum+=b;
        a = a + b;
        b = a + b;
    }
    if(a<=num && a%2 !== 0) /* this means b >=num but a<=num */
        sum += a;
    else if(b <= num && b%2 !== 0) /* this means a>=num but b<=num*/
        sum += b;
    return sum;
}
sumFibs(75025);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Sum All Primes
function sumPrimes(num) {
    var x=2;
    var added=2;
    while (x<num) {
        x++;
        for (var i=2;i<x;i++){
            if (x%i===0){
                break;
            }
            else if (i===x-1) {
                added+=x;}
        }
    }
    return added;
}
sumPrimes(10);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Smallest Common Multiple
function smallestCommons(arr) {
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var grandLCM;
    for (var i=min; i<max; i++) {
        if(i===min){
            grandLCM = (i * (i+1))/gcd(i, i+1);
        }else{
            grandLCM = (grandLCM * (i+1))/gcd(grandLCM, i+1);
        }
    }
    return grandLCM;
    function gcd(x, y) {    // Implements The Euclidean Algorithm
        if (y === 0)
            return x;
        else
            return gcd(y, x%y);
    }
}
// test here
smallestCommons([1,5]);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Drop it
function dropElements(arr, func) {
    // drop them elements.
    var times = arr.length;
    for (var i = 0; i < times; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}
// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;})


//or
function dropElements(arr, func) {
    if (arr.length === 0 || func(arr[0])) {
        return arr;
    } else {
        arr.shift();
        return dropElements(arr, func);
    }
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Steamroller
function steamrollArray(arr) {
    var flattenedArray = [];
    // Create function that adds an element if it is not an array.
    // If it is an array, then loops through it and uses recursion on that array.
    var flatten = function(arg) {
        if (!Array.isArray(arg)) {
            flattenedArray.push(arg);
        } else {
            for (var a in arg) {
                flatten(arg[a]);
            }
        }
    };
    // Call the function for each element in the array
    arr.forEach(flatten);
    return flattenedArray;
}
// test here
steamrollArray([1, [2], [3, [[4]]]]);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Intermediate Algorithm Scripting: Binary Agents
function binaryAgent(str) {
    // Separate the binary code by space.
    str = str.split(' ');
    var power;
    var decValue = 0;
    var sentence = '';

    // Check each binary number from the array.
    for (var s = 0; s < str.length; s++) {
        // Check each bit from binary number
        for (var t = 0; t < str[s].length; t++) {
            // This only takes into consideration the active ones.
            if (str[s][t] == 1) {
                // This is quivalent to 2 ** position
                power = Math.pow(2, +str[s].length - t - 1);
                decValue += power;

                // Record the decimal value by adding the number to the previous one.
            }
        }

        // After the binary number is converted to decimal, convert it to string and store
        sentence += (String.fromCharCode(decValue));

        // Reset decimal value for next binary number.
        decValue = 0;
    }

    return sentence;
}

// test here
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Intermediate Algorithm Scripting: Everything Be True
function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    var counter = 0;
    // Check for each object
    for (var c in collection) {
        // If it is has property and value is truthy
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
}
// test here
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Arguments Optional
function addTogether() {
    // Function to check if a number is actually a number
    // and return undefined otherwise.
    var checkNum = function(num) {
        if (typeof num !== 'number') {
            return undefined;
        } else
            return num;
    };

    // Check if we have two parameters, check if they are numbers
    // handle the case where one is not
    // returns the addition.
    if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {
            return a + b;
        }
    } else {
        // If only one parameter was found, returns a new function that expects two
        // Store first argument before entering the new function scope
        var c = arguments[0];

        // Check the number again, must be outside the function to about returning an object
        // instead of undefined.
        if (checkNum(c)) {
            // Return function that expect a second argument.
            return function(arg2) {
                // Check for non-numbers
                if (c === undefined || checkNum(arg2) === undefined) {
                    return undefined;
                } else {
                    // if numbers then add them.
                    return c + arg2;
                }
            };
        }
    }
}
// test here
addTogether(2,3);








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Intermediate Algorithm Scripting: Make a Person
var Person = function(firstAndLast) {
    var fullName = firstAndLast;
    var arr = fullName.split(' ');
    this.getFirstName = function() {
        return arr[0];
    };
    this.getLastName = function() {
        return arr[1];
    };
    this.getFullName = function() {
        return fullName;
    };
    this.setFirstName = function(first) {
        arr[0] = first;
        fullName = arr.join(' ');
    };
    this.setLastName = function(last) {
        arr[1] = last;
        fullName = arr.join(' ');
    };
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
        arr = fullName.split(' ');
    };
};
var bob = new Person('Bob Ross');
bob.getFullName();





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intermediate Algorithm Scripting: Map the Debris
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];
    var getOrbPeriod = function(obj) {
        var c = Math.pow(earthRadius + obj.avgAlt, 3);
        var b = Math.sqrt(c / GM);
        var orbPeriod = Math.round(a * b);
        delete obj.avgAlt;
        obj.orbitalPeriod = orbPeriod;
        return obj;
    };
    for (var elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }
    return newArr;
}
// test here
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

