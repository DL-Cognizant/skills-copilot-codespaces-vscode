//Create web server
const http = require('http');

const server = http.createServer((req, res) => {
    // Send a plain text response
    res.end('Hello World from the server');
});

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000');
});
//lots of code added ;-)
console.log('Hello World from the console');
