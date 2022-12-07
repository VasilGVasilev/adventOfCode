const fs = require('fs');
let stacks = require('./dataStacks.json')
let inputs = fs.readFileSync('dataInput.txt', {encoding: 'utf-8'}).split('\r\n');

// PART ONE

inputs = inputs.map((e)=>{
    let line = e.split(' ');
    line.shift();
    let itemsMoved = Number(line.shift());
    line.shift();
    let fromStack = line.shift();
    line.shift();
    let toStack = line.shift();
    eachRestack(stacks, fromStack, toStack, itemsMoved);
    
})

let resultStr = '';
for (let key in stacks){
    let letter = stacks[key].slice(-1);
    resultStr += letter
}

console.log(resultStr);

function eachRestack(stacks, fromStack, toStack, itemsMoved){
    let manipulatedStack = stacks[fromStack].split('');
    
    let currentItems = [];
    for (let i = 0; i < itemsMoved; i++){
        currentItems.push(manipulatedStack.pop());
    }
    stacks[fromStack] = stacks[fromStack].slice(0, -itemsMoved)
    currentItems = currentItems.join('');
    let newStack = stacks[toStack];
    newStack += currentItems;
    stacks[toStack] = newStack;
    
}


// PART Two

inputs = inputs.map((e)=>{
    let line = e.split(' ');
    line.shift();
    let itemsMoved = Number(line.shift());
    line.shift();
    let fromStack = line.shift();
    line.shift();
    let toStack = line.shift();
    eachRestack(stacks, fromStack, toStack, itemsMoved);
    
})

let resultStr = '';
for (let key in stacks){
    let letter = stacks[key].slice(-1);
    resultStr += letter
}

console.log(resultStr);

function eachRestack(stacks, fromStack, toStack, itemsMoved){
    let manipulatedStack = stacks[fromStack].split('');
    
    let currentItems = [];
    for (let i = 0; i < itemsMoved; i++){
        currentItems.unshift(manipulatedStack.pop());
    }
    stacks[fromStack] = stacks[fromStack].slice(0, -itemsMoved)
    currentItems = currentItems.join('');
    let newStack = stacks[toStack];
    newStack += currentItems;
    stacks[toStack] = newStack;
    
}