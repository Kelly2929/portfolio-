import {getAllProducts,search4Product} from "../models/products.model.js";

export const _getAllProducts=async(req, res)=>{
    try{

        const data=await getAllProducts();
        res.json(data);
        

    }catch(error){
        console.log(error);
        res.status(404).json({msg:"not found"});
    }
};

export const _search4Product=async (req,res)=>{
    const {name}=req.query;
    try{
        const data=await search4Product(req.query.name);
        res.json(data);
    }
    catch(error){
    console.log(error);
    res.status(404).json({msg:"not found"});
    }
};


