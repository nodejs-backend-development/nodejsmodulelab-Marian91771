const { Transform } = require('stream');

process.stdin.pipe(new Transform({
        transform(chunk, encoding, callback) {
            let result = chunk.toString().toUpperCase();
            console.log(`Log: ${result}`);
            callback();
        }
    }))
    .pipe(process.stdout);
