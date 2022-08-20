var express=require ("express")

var route=express.Router()


route.use("/login",(req,res)=> res.sendFile(__dirname+"/client/login.html"))
route.use("/signup",(req,res)=> res.sendFile(__dirname+"/client/login.html"))
route.use("/",(req,res)=> res.sendFile(__dirname+"/client/home.html"))
module.exports=route;
