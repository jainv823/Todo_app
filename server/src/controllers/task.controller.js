import { asyncHandler } from "../utils/asyncHandler.js";
import { Task } from "../models/task.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const addTask = asyncHandler(async (req, res) => {
  const { name, status } = req.body;
  if (!name) {
    throw new ApiError(400, "Task name is required");
  }
  try {
    const task = await Task.create({ name, status });
    if (!task) {
      throw new ApiError(400, "Task not created");
    }
    return res
      .status(201)
      .json(new ApiResponse(201, task, "Task created successfully!"));
  } catch (error) {
    throw new ApiError(400, error.message);
  }
});

const getAllTasks = asyncHandler(async(req,res) => {
    const tasks = await Task.find();
    if (!tasks) {
      throw new ApiError(400, "Tasks not found");
    }
    return res.status(200).json(new ApiResponse(200, tasks));
})

export { addTask,getAllTasks };
