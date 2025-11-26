import express from "express";
import { addTask, getAllTasks, updateTask } from "../controllers/task.controller.js";


const router = express.Router();

router.route("/addTask").post(addTask);
router.route("/").get(getAllTasks);
router.route("/updateTask/:id").put(updateTask);

export default router