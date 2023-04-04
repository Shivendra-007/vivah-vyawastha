import express from "express";
import { saveRequest, remove, viewRequest } from "../controller/request.controller.js";

const router = express.Router();

router.post("/save", saveRequest);
router.get("/view", viewRequest);
router.post("/remove", remove);

export default router;