import express from "express";
import { save ,list,searchBydate,remove } from "../controller/request.controller.js";
let router =express.Router();

router.post("/save",save); 
router.get("/fetchAll",list)
router.get("/search/:date",searchBydate)
router.post("/remove",remove);


export default router;