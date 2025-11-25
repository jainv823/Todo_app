import express from "express";
import { addTask } from "../controllers/task.controller.js";


const router = express.Router();

router.route("/addTask").post(addTask);

export default router