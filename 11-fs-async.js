const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/combined_async.txt',
            `Here is the result: ${first}\n\n${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                } console.log(result); console.log('Done with the task')
            })
    })
})

console.log('Starting the next one');