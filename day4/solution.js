const fs = require('fs');

const lines = fs.readFileSync('data.txt', {encoding: 'utf-8'}).split('\r\n');

let counter = 0;
lines.map(e=>{
    let twoSetsOfNums = e.split(',');
    let firstSet = twoSetsOfNums.shift().split('-');
    let firstSetFirstNum = Number(firstSet.shift());
    let firstSetSecondNum = Number(firstSet.pop());
    let secondSet = twoSetsOfNums.pop().split('-');
    let secondSetFirstNum = Number(secondSet.shift());
    let secondSetSecondNum = Number(secondSet.pop());
    if(firstSetFirstNum <= secondSetFirstNum && firstSetSecondNum >= secondSetSecondNum || firstSetFirstNum >= secondSetFirstNum && firstSetSecondNum <= secondSetSecondNum){
        counter++
    }
})

console.log(counter)