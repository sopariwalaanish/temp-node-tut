const { readFileSync, writeFileSync } = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

writeFileSync('./content/combined.txt', `Here is the result: ${first}\n\n${second}`, { flag: 'a' })

console.log('Done with the first ');
console.log('Then start with the second');
