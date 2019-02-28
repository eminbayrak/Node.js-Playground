var fs = require('fs');

var data = fs.readFileSync('words.txt', 'utf8');
//var words = JSON.parse(data);
console.log(data);

/*
    Read file(s) under a directory
*/
const testFolder = './tests';
fs.readdirSync(testFolder).files.forEach(file => {
        console.log(file);
});