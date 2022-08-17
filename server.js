var express=require("express")
var app=express()

app.get("/",(req,res)=>{

res.sendFile(__dirname+"/index.html")


})
app.get("/file",(req,res)=>{

res.send("/file.html")


})

app.listen(process.env.PORT || 8080,()=> console.log("8080"))


