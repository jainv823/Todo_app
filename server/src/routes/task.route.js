import express from "express";
import { addTask, getAllTasks } from "../controllers/task.controller.js";


const router = express.Router();

router.route("/addTask").post(addTask);
router.route("/").get(getAllTasks);

export default router