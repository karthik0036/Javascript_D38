const prompt = require('prompt-sync')();
const year = prompt('Enter Year : ');
console.log(`${year}`);
if((year%4 == 0) && (year%100!=0) || (year % 400==0)) {
    console.log(`Lear Year`);
}
else{
    console.log(`Not a Lear Year`);
}