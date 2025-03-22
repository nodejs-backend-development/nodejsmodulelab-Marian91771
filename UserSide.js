const http = require('http');
const zlib = require('zlib');
const fs = require('fs');

const host = 'localhost';
const port = 8000;

fs.createReadStream('text.txt')
    .pipe(zlib.createGzip())
    .pipe(http.request(`http://${host}:${port}`, {method: 'POST'}))
    .on('finish', () => console.log('File sended'))
    