import express from "express";
import { save ,list,search,searchByAdd,remove } from "../controller/makeup.controller.js";
let router =express.Router();

router.post("/save",save);//done and check.. 
router.get("/fetchAll",list)// done and check
router.get("/search/:keyword",search)//done and check
router.get("/search/:address",searchByAdd)//done and check
router.post("/remove",remove);//done and check...


export default router;