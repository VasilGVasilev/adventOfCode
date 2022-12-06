const fs = require('fs');

const lines = fs.readFileSync('data.txt', {encoding: 'utf-8'}).split('\r\n');

// Part One
let fullyOverlapping = 0;
lines.map(e=>{
    let twoSetsOfNums = e.split(',');
    let firstSet = twoSetsOfNums.shift().split('-');
    let firstSetFirstNum = Number(firstSet.shift());
    let firstSetSecondNum = Number(firstSet.pop());
    let secondSet = twoSetsOfNums.pop().split('-');
    let secondSetFirstNum = Number(secondSet.shift());
    let secondSetSecondNum = Number(secondSet.pop());
    if(firstSetFirstNum <= secondSetFirstNum && firstSetSecondNum >= secondSetSecondNum || firstSetFirstNum >= secondSetFirstNum && firstSetSecondNum <= secondSetSecondNum){
        fullyOverlapping++
    }
})
console.log(fullyOverlapping)

// Part Two
let total = lines.length;
let nonOverlapping = 0;
// find non-overlapping
lines.map(e=>{
    let twoSetsOfNums = e.split(',');
    let firstSet = twoSetsOfNums.shift().split('-');
    let firstSetFirstNum = Number(firstSet.shift());
    let firstSetSecondNum = Number(firstSet.pop());
    let secondSet = twoSetsOfNums.pop().split('-');
    let secondSetFirstNum = Number(secondSet.shift());
    let secondSetSecondNum = Number(secondSet.pop());
    if(firstSetSecondNum < secondSetFirstNum || firstSetFirstNum > secondSetSecondNum){
        nonOverlapping++
    }
})
// get overalpping by substracting non-overlapping from total
let overlapping = total - nonOverlapping
console.log(overlapping)
