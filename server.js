// ACCESS EXPRESS LIBRARY
const express = require('express');
const app = express();
// ACCESS BODY PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// MOCK USER DATA
const mockUserData=[
    {name:'Amsu'},
    {name:'Baasir'}
]

// GET ROUTE
app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got some users. Good job!',
        users: mockUserData
    })
})

app.get('/users/:id', function(req, res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got a user!!!!!!',
        user: req.params.id
    })
})

// POST ROUTE
app.post('/login', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUserName="amsuTheGOAT";
    const mockPassword="superSecret";

    // IF USERNAME AND PASSWORD MATCH THEN DO THE FOLLOWING JSON DATA
    if (username === mockUserName && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and username matches!!!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username dont match brooooooo!'
        })
    }
})

// LISTENER LINE
app.listen(8000, function() {
    console.log("Server is runnin!!!");
})