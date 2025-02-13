const { readFile, writeFile } = require('fs')  // Fixed typo in readfile -> readFile

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result1) => {  // Changed result to result1 for clarity
    if (err) {
        console.log(err)
        return
    }
    const first = result1  // Moved inside callback

    readFile('./content/second.txt', 'utf8', (err, result2) => {  // Changed result to result2
        if (err) {
            console.log(err)
            return
        }
        const second = result2  // Moved inside callback

        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err) => {  // Removed unused result parameter
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with the task')
            }
        )
    })
})

console.log('starting next task')
