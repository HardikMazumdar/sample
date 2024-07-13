const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    return res.status(401).json({message:"Please login to access this resourse"})
})
app.listen(5500,()=>{
    console.log("Listening at 5500");
})