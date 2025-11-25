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

export { addTask };
