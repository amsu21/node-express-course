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

// LISTENER LINE
app.listen(8000, function() {
    console.log("Server is runnin!!!");
})