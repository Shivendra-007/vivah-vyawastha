import express  from "express";
import { save, list ,remove} from "../controller/service.controller.js";

let router =express.Router();

router.post("/save",save);//done and check.. 
router.get("/view",list);//done and check..
router.post("/remove",remove);//done and check...


export default router;