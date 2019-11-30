const fs = require('fs');
const request = require('request');
const path = require('path');
const dataPath = path.join(__dirname, 'move.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function sleep (time) {
    return new Promise(resolve => {
        setTimeout(resolve, time); 
    });
}
let count = 1;
async function test () {
    for(var el of data) {
        request(el.img).pipe(fs.createWriteStream(`${el.title}.jpg`));
        console.log(count, el.title );
        count++;
        await sleep(1000);
    }
}
test();