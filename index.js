const express=require("express");
const app=express();

app.get('/',function(req,res){
    res.send("Hello world");
})

const port=process.env.PORT || 5000
app.listen(port,console.log(`server running on port`,port))