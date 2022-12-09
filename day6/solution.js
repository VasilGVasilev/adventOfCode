const fs = require('fs');
let input = fs.readFileSync('data.txt', {encoding: 'utf-8'})

// // Part One

counter = 4;
for (let i = 0; i < input.length; i++){
    
    let segmentOfFour = input.substring(i,i+5);
    if(hasRepeats(segmentOfFour)){
        counter++;
        continue;
    } else {
        break;
    }
}

console.log(counter);

function hasRepeats(str) {
    return /(.).*\1/.test(str);
}

// Part Two

counter = 14;
for (let i = 0; i < input.length; i++){
    
    let segmentOfFour = input.slice(i, i + 14);
    if(hasRepeats(segmentOfFour)){
        counter++;
        continue;
    } else {
        break;
    }
}

console.log(counter);

function hasRepeats(str) {
    return /(.).*\1/.test(str);
}