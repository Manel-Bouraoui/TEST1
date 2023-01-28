import express from "express";
import {
  //countByCity,
  createUsine,
  deleteUsine,
  getUsine,
  //getusineRooms,
  getUsines,
  updateUsine,
} from "../controllers/usine.js";
import Usine from "../models/Usine.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();


//CREATE
router.post("/", verifyAdmin, createUsine);

//UPDATE
router.put("/:id", verifyAdmin, updateUsine);
//DELETE
router.delete("/:id", verifyAdmin, deleteUsine);
//GET

router.get("/find/:id", getUsine);
//GET ALL

router.get("/", getUsines);
/*router.get("/countByCity", countByCity);
router.get("/room/:id", getusineRooms);*/

export default router;