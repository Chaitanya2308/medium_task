
// Problem 0: Part A
var cat = {
    name: `Fluffy`,
    activities: [`play`, `eat cat food`],
    catFriends: [
    {
    name: `bar`,
    activities: [`be grumpy`, `eat bread omblet`],
    weight: 8,
    furcolor: `white`
    }, 
    {
    name: `foo`,
    activities: [`sleep`, `pre-sleep naps`],
    weight: 3
    }
    ]
   }
   //Add height and weight to Fluffy
   cat.height=5;
   cat.weight=20;
   console.log(cat)
//Fluffy name is spelled wrongly. Update it to Fluffyy
   cat.name="Fluffyy"
   console.log(cat)
  // List all the activities of Fluffyy’s catFriends.
   for(i in cat.catFriends)
   {
       console.log(cat.catFriends[i].activities)
   }
   //Print the catFriends names.
   for(i in cat.catFriends)
   {
       console.log('Cat Friends Names:'+cat.catFriends[i].name)
   }
// Print the total weight of catFriends
let total_weight = 0;
for (i in cat.catFriends) {
  total_weight += cat.catFriends[i].weight;
}
console.log(total_weight)

//Print the total activities of all cats (op:6)
let arr = [];
arr.push(...cat.activities);
for (i in cat.catFriends) {
  arr.push(...cat.catFriends[i].activities);
}
console.log(arr.join(","));


//Add 2 more activities to bar & foo cats
for (let i in cat.catFriends) {
  cat.catFriends[i].activities.push("activity 1", "activity 2");
}
console.log(cat.catFriends);

//Update the fur color of bar
for (let i in cat.catFriends) {
  if (cat.catFriends[i].name == "bar") {
    cat.catFriends[i].furcolor = "brown";
    break;
  }
}
console.log(cat.catFriends[0]);

//Problem 0: Part B

var myCar = {
    make: `Bugatt`,
    model: `Bugatti La Voiture Noire`,
    year: 2019,
    accidents: [
    {
    date: `3/15/2019`,
    damage_points: `5000`,
    atFaultForAccident: true
    },
    {
    date: `7/4/2022`,
    damage_points: `2200`,
    atFaultForAccident: true
    },
    {
    date: `6/22/2021`,
    damage_points: `7900`,
    atFaultForAccident: true
    }
    ]
   }
//1. Loop over the accidents array. Change atFaultForAccident from true to false.
   for(let i in myCar.accidents)
   {
       if(myCar.accidents[i].atFaultForAccident===true)
       {
        myCar.accidents[i].atFaultForAccident=false;
       }
   }
   console.log(myCar.accidents)

//2. Print the dated of my accidents

for(let i in myCar.accidents)
{
    console.log("Accidents Date:"+myCar.accidents[i].date)
}

// problem 1:Parsing an JSON object’s Values:
var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
console.log(Object.values(obj))
}
printAllValues(obj)

//problem 2:Parsing an JSON object’s Keys:
var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
console.log(Object.keys(obj))
}
printAllValues(obj)

//Problem 3:
//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
var obj = { name: "ISRO", age: 35, role: "Scientist" };
function convertListToObject(obj) {
  // your code here
  let result = [];
  for (let i in obj) {
    result.push([i, obj[i]]);
  }
  return result;
}
console.log(convertListToObject(obj));

//problem 4:
// Parsing a list and transform the first and last elements

var arr2 = [`GUVI`, `I`, `am`, `a geek`];
function transformFirstAndLast(arr) {
 var newObject={}
 newObject[arr[0]]=arr[arr.length-1]
 return newObject;
}

console.log(transformFirstAndLast(arr2))


//Problem 5:
// Parsing a list of lists and convert into a JSON object:
var arr3 = [[`make`, `Ford`], [`model`, `Mustang`], [`year`, 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(let i in arr)
 {
     newObject[arr[i][0]]=arr[i][1]
 }
 return newObject;
}
console.log(fromListToObject(arr3))

//Problem 6:
// Parsing a list of lists and convert into a JSON object:

var arr1= [
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];
function transformEmployeeData(arr) {
  var tranformEmployeeList = [];
  for (let i in arr) {
    let obj = {};
    for (let j in arr[i]) {
      obj[arr[i][j][0]] = arr[i][j][1];
    }
    tranformEmployeeList.push(obj);
  }

  return tranformEmployeeList;
}
console.log(transformEmployeeData(arr1))

//problem 7:
// Parsing two JSON objects and Compare:
var expected = { foo: 5, bar: 6 };
var actual = { foo: 6, bar: 5 };
function assertObjectsEqual(actual, expected, testName) {
  // your code here
  if (JSON.stringify(expected) == JSON.stringify(actual)) {
    return "Passed";
  } else {
    return `Failed ${testName} Expected ${JSON.stringify(
      expected
    )}, but got ${JSON.stringify(actual)}`;
  }
}
console.log(
  assertObjectsEqual(actual, expected, "detects that two objects are equal")
);

//Problem 8:
//Parsing JSON objects and Compare:
var securityQuestions = [
  {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter",
  },
  {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985",
  },
  {
    question: "What city were you born in?",
    expectedAnswer: "NYC",
  },
];
function chksecurityQuestions(securityQuestions, question, answer) {
  // your code here
  for (let i in securityQuestions) {
    if (
      securityQuestions[i].question == question &&
      securityQuestions[i].expectedAnswer == answer
    ) {
      return true;
    }
  }
  return false;
}
var ques = "What was your first pet’s name?";
var ans = "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status)
var ques = "What was your first pet’s name?";
var ans = "DufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status)


//Problem 9:
//Write a function to return the list of characters below 20 age
var students = [
  {
    name: "Siddharth Abhimanyu",
    age: 21,
  },
  { name: "Malar", age: 25 },
  { name: "Maari", age: 18 },
  { name: "Bhallala Deva", age: 17 },
  { name: "Baahubali", age: 16 },
  { name: "AAK chandran", age: 23 },
  { name: "Gabbar Singh", age: 33 },
  { name: "Mogambo", age: 53 },
  { name: "Munnabhai", age: 40 },
  { name: "Sher Khan", age: 20 },
  { name: "Chulbul Pandey", age: 19 },
  { name: "Anthony", age: 28 },
  { name: "Devdas", age: 56 },
];
function returnMinors(arr) {
  let result = [];
  for (let i in arr) {
    if (arr[i].age < 20) {
      result.push(arr[i].name);
    }
  }
  return result;
}
console.log(returnMinors(students));