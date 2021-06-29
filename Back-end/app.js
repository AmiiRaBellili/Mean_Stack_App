const express = require('express');
var app = express();

app.use((req,res,next)=>{
    console.log('First middleware');
    next(); 
});
app.use((req,res,next)=>{
   res.send('yess');
    
});

module.exports= app ; 
