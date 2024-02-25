import express from "express";
import { _getAllProducts, _search4Product} from "../controllers/products.controllers.js";



const router= express.Router()

router.get('/all',_getAllProducts);
/**req.qu */
router.get('/search',_search4Product);
export default router; 

