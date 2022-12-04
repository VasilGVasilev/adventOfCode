const fs = require('fs');

const lines = fs.readFileSync('text.txt', {encoding: 'utf-8'}).split('\r\n');

let me = {
    'X': 1,
    'Y': 2,
    'Z': 3
}

let points = {
    lose: 0,
    draw: 3,
    win: 6
}

let result = {
    'A X': points.draw,
    'A Y': points.win,
    'A Z': points.lose,
    'B X': points.lose,
    'B Y': points.draw,
    'B Z': points.win,
    'C X': points.win,
    'C Y': points.lose,
    'C Z': points.draw,
}


let sum = 0;
lines.map(e=>{
    let resultPoints = result[e];
    let myTurn = e.split(' ').pop();
    let resultMe = me[myTurn];
    sum += resultPoints;
    sum += resultMe;
})
console.log(sum);