import express from "express"
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getAllHotel, getHotel, updatedHotel } from "../controllers/hotel.js";
 const router = express.Router();
 
//Create
 router.post( "/", createHotel);

 //Update 

 router.put("/:id", updatedHotel);
    
//delete
router.delete("/:id", deleteHotel);
//get

router.get("/:id", getHotel);
//getall
router.get("/", getAllHotel);


 export default router