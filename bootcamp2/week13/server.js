const express=require("express");
const app= express();
 
app.listen(process.env.PORT||3000,()=>{
    console.log('run.on${process.env.PORT||3001})');
});

app.get("/test",(req,res)=>{
    res.send("OK");
});

app.get("api/products", (req,res)=>{
    res.json("products");
});

app.get(`/api/products/:products`),(req,res)=>{
    
}