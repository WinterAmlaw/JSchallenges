'use strict';

let mark = {
  weight : 78,
  height : 1.69
};
let john = {
  weight : 92,
  height : 1.95
};

const markBmi = mark.weight / mark.height ** 2;
const johnBmi = john.weight / john.height ** 2;


document.getElementById('marks-weight').innerHTML = mark.weight;
document.getElementById('marks-height').innerHTML = mark.height;
document.getElementById('johns-weight').innerHTML = john.weight;
document.getElementById('johns-height').innerHTML = john.height;


if (markBmi > johnBmi) {
  document.getElementById('higher-bmi-name').innerHTML = 'Marks BMI (' + Math.round(markBmi) + ')' ;
  document.getElementById('lower-bmi-name').innerHTML = 'Johns BMI (' + Math.round(johnBmi) + ')' ;
} else {
  document.getElementById('higher-bmi-name').innerHTML = 'Johns BMI (' + Math.round(johnBmi) + ')' ;
  document.getElementById('lower-bmi-name').innerHTML = 'Marks BMI (' + Math.round(markBmi) + ')' ;
}

//Fundementals part two challenge #2

let calcTip = (billValue) => billValue > 50 && billValue < 300 ? billValue * .15: billValue * .2;

const bills = [125, 555, 44];
let tips = [];
let total = [];

for(let i = 0; i < bills.length; i++) tips.push(calcTip(bills[i]));
for(let i = 0; i < bills.length; i++) total.push(bills[i] + tips[i]);

// console.log(total);


//REVERSE ANYTHING

function revNum(num){
  numArr = num.toString().split('');
  revArr = [];
  for(i = numArr.length - 1; i >= 0; i--){
    revArr.push(numArr[i]);
  };
  revStr = revArr.join('');
  reversed = parseFloat(revStr);
  return reversed;
};

// console.log(revNum(2001));

function revStr(str){
  strArr = str.split('');
  revArr = [];
  for(i = strArr.length; i >= 0; i--){
    revArr.push(strArr.[i]);
  };
  reversed = revArr.join('');
  return reversed;
};

// console.log(revStr('hello'));

function revArr(arr){
  reversed = []
  for(i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
  }
  return reversed;
}

// console.log(revArr([10,20,30]));

function reverseAnything(input) {
  if(typeof input === 'number'){
    return revNum(input);
  }
  else if(typeof input === 'string'){
    return revStr(input);
  }
  else if(typeof input === 'object'){
    return revArr(input);
  }
  else{
    return `Sorry, that was not valid input.`
  }
}

console.log(reverseAnything([1,2,3]));

//TEMP AMPLITUTE DETECT

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14]
let max = temp[0];
let min = temp[0];

for(i = 0; i < temp.length; i++){
  if(typeof temp[i] === 'number'){
    if(temp[i] > max){
      max = temp[i]
    }else if(temp[i] < min){
     min = temp[i]
    }
  }else{
    continue;
  }
}
console.log(max - min);

//CLEANED UP // TEMP

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14]
let max = temp[0];
let min = temp[0];

for (i = 0; i < temp.length; i++) {
  if (typeof temp[i] === 'number') {
    temp[i] > max ? max = temp[i] : max = max;
    temp[i] < min ? min = temp[i] : min = min;
  } else {
    continue;
  }
}
console.log(max - min);

//section 5 challenge #1

arr = [12, 5, -5, 0, 4];

function printForcast(input) {
  for (i=0; i < input.length; i++) {
    console.log(`${input.[i]}ºC in ${i+1} days`);
  }
}

printForcast(arr);

//Edabit HARD PROBLEM #1

let a1 = [1, 2, 3, 4, 5, 6, 7];
let a2 = [8, 6, 33, 100];
let a3 = [2, 55, 60, 97, 86];


function sevenBoom(arr) {
  let strArr = arr.join('').split('');
  let numArr = [];
  for(let i = 0; i < strArr.length; i++){
    numArr.push(Number(strArr[i]));
  }
  for(let i = 0; i < strArr.length; i++){
    if(numArr[i] === 7) {
      return "Boom!";
    }
  }
  return "there is no 7 in the array";
}

console.log(sevenBoom([8, 6, 33, 100]));

//Edabit HARD  PROBLEM #2

function towerHanoi(discs) {
  discResult = 0;
  counter = 0;
  if (typeof discs === 'number'){
     for (i = 0; i < discs; i++ ){
    discResult = discResult * 2 + 1;
    // counter ++;
    }

  }
   return discResult;
  // return 'invalid input';
}

// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]

// Create a function that returns the total number of boomerangs in an array.

// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.

function countBoomerangs(arr) {
  boomerangs = 1;
  boomerangStr = '';
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+2] && arr[i] !== arr[i+1]) {
      boomerangStr += `${boomerangs}: [${arr[i]}, ${arr[i+1]}, ${arr[i+2]}] `;
      boomerangs += 1;
    }
  }
  return boomerangStr;
}

console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));

// Mubashir needs your help to find out the next happy year.

// A Happy Year is the year with only distinct digits. Create a function that takes an integer year and returns the next happy year.

// happyYear(2017) ➞ 2018
// // 2018 has all distinct digits

// happyYear(1990) ➞ 2013

// happyYear(2021) ➞ 2031


//NOT FINISHED!

function happyYear(year) {
  let numYear = year;
  let nextYear = year + 1;
  let strYearArr = year.toString().split('');
  let numYearArr = [];

  for(let i = 0; i < strYearArr.length; i++) {
    numYearArr.push(Number(strYearArr[i]))
  }

  for(let i = strYearArr.length - 1; i >= 0; i--) {
    for(let x = strYearArr.length - 2; x >= 0; x--) {
      if(numYearArr[i] !== numYearArr[x] && numYearArr[i] !== numYearArr[x - 1] && numYearArr[i] !== numYearArr[x - 2] && x !== i) {
        return numYear;
        //i = 1
        //x = 0
      }
    }
  }

   for(let i = strYearArr.length - 1; i >= 0; i--) {
    for(let x = strYearArr.length - 2; x >= 0 ; x--) {
      if(numYearArr[i] === numYearArr[x] && x !== i) {
        happyYear(nextYear);
      }
    }
  }

}

console.log(happyYear(2022));


// Create a function which returns the number of true values there are in an array.


function countTrue(arr) {
  let trueArr = [];

  for(i = 0; i < arr.length; i++) {
    if(arr[i] === true){
      trueArr.push(arr[i])
    }
  }
 return trueArr.length;
}

console.log(countTrue([true, false, false, true, false]));

// Write a function redundant that takes in a string str and returns a function that returns str.
// Examples

// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

function redundant(str) {
  return function returnStr(){
    return str;
  }
}

const f1 = redundant("apple");

console.log(f1());

// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.
// Examples

// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false


function possibleBonus(a, b) {
  if(a < b) {
    if(a + 6 >= b) {
      return true;
    }
  }
return false;
}

console.log(possibleBonus(5, 3));
