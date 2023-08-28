const express = require('express')
const app = express();
console.log("node js listens")
app.get("/test",(req,res)=>{
res.json("test ok")
})

console.log("start....")
app.listen(4000,()=>{console.log("server listens")});