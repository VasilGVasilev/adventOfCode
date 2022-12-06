const { log } = require('console');
const fs = require('fs');

const lines = fs.readFileSync('data.txt', {encoding: 'utf-8'}).split('\r\n');

let sum = 0;

lines.forEach( e => {
    
    let startOfSecondCompartment = e.length / 2;
    let firstCompartment = e.slice(0, startOfSecondCompartment);
    let secondCompartment = e.slice(startOfSecondCompartment);

    for (let f = 0; f < firstCompartment.length; f++){
        let found = false;
        for (let s = 0; s < secondCompartment.length; s++){

            if(firstCompartment[f] === secondCompartment[s]){
                let letter = firstCompartment[f];
                if (letter.toUpperCase() === letter) {
                    sum += (letter.charCodeAt(0) - 38);
                } else {
                    sum += (letter.charCodeAt(0) - 96)
                }
                found = true;
                break;
            }
        }
        if (found){
            break;
        }
    }
})

console.log(sum);