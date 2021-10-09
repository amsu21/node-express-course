// ACCESS EXPRESS LIBRARY
const express = require('express');
const app = express();


// MOCK USER DATA
const mockUserData=[
    {name:'Amsu'},
    {name:'Baasir'}
]

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

// LISTENER LINE
app.listen(8000, function() {
    console.log("Server is runnin!!!");
})