const express = require('express');
const app = new express();
const month = ["January","February","March","April","May","June","July","August","September","October","November"
    ,"December"
];
app.get("/",(req,res)=>{
    res.send("Welcome to express app");
})
app.get("/:num",(req,res)=>{
    let monthNum = parseInt(req.params.num);
    if(monthNum<=12 && monthNum>=1)
    {
        res.send(`The month is  ${month[monthNum-1]}`);
    }
    else
    {
        res.send("error");
    }
})
app.listen(3000,()=>{
    console.log("Listening on port 3000");
})