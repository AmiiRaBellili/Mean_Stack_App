const express = require('express');
var app = express();

app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin",'*');
res.setHeader("Acess-Control-Allow-Header","Origin,X-Requested-With,Content-Type,Accept");
res.setHeader("Acess-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");
next();
});
app.use('/api/posts',(req,res,next)=>{

    const posts = [
    {id:'hdhd1gf4', 
    title:' the first posts nodejs',
    content: 'is the first content'
     },
     {id:'hdhd1gf99', 
    title:' the seconde posts nodejs',
    content: 'is the seconde content'
     },
    ];
      res.status(200).json({
          message : 'this is successuful fetching',
          posts:posts
      }); 
});


module.exports= app ; 
