const fs = require('fs');

const lines = fs.readFileSync('text.txt', {encoding: 'utf-8'}).split('\r\n');

let overallLeader = 0;
let currentSum = 0;
for (let i = 0; i < lines.length; i++){
    
    if (lines[i] != ''){
        currentSum += Number(lines[i]);
    } else {
        if (overallLeader < currentSum){
            overallLeader = currentSum; 
        }
        currentSum = 0;
    }
}
console.log(overallLeader);

