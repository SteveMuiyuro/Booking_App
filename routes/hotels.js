import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../api/controllers/hotel.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE

router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);
//GET

router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

export default router;
