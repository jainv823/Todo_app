import express from "express";
import {
  addTask,
  deleteAllTasks,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.route("/").get(getAllTasks);
router.route("/addTask").post(addTask);
router.route("/updateTask/:id").put(updateTask);
router.route("/deleteTask/:id").delete(deleteTask);
router.route("/deleteAllTask").delete(deleteAllTasks)

export default router;
