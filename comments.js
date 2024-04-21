//create web server
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
// create a server that listens on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//create an array of comments
let comments = [
    {
        id: 1,
        username: 'John',
        comment: 'Hello there!'
    },
    {
        id: 2,
        username: 'Jane',
        comment: 'Nice post!'
    }   
]