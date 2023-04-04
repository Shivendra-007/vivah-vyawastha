import express  from "express";
import { save, list ,remove} from "../controller/feedback.controller.js";

let router =express.Router();

router.post("/save",save); 
router.get("/view",list);
router.post("/remove",remove);


export default router;