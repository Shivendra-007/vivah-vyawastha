import express from "express";
import {saveMultiple,viewAll} from "../controller/stdio.controller.js";

const router = express.Router();

router.post("/save",saveMultiple);
router.get("/view",viewAll);

export default router;