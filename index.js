const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const host = 'localhost';
const port = 8000;


// const server1 = http.createServer((req, res) => {

//     res.writeHead(200);
//     let name = 'marian';
//     if(name){
//         res.end(`Hello ${name}`);
//     } else {
//         res.end('You should provide name parameter');
//     }

// });

// server1.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });


const server2 = http.createServer((req, res) => {
    res.writeHead(200);
    req.pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('receivedText.txt'))
        .on('finish', () => {
            res.end('File received and saved');
            console.log('Файл збережено');
        })
})

server2.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})