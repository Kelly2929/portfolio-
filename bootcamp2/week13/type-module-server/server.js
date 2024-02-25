import express from "express";

import products_router from "./routes/products.roouter.js";

const app=express()


app.get('/test',(req,res)=>{
    res.send("server is alive");
})


app.listen(3001);
// app.use(router); 
app.use(products_router);
  

 