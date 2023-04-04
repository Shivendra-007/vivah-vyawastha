import express from "express";
import {addService,viewService,remove } from "../controller/service.controller.js";

const router = express.Router();

router.post("/add",addService);
router.get("/view",viewService);
router.post("/remove",remove);

export default router;