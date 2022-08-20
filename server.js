var express=require ("express")
var myroute=require ("./route.js")
var app=express ()

app.use("/", myroute)


app.listen(process.env.PORT || 3000)