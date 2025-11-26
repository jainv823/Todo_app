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

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  if (!tasks) {
    throw new ApiError(400, "Tasks not found");
  }
  return res.status(200).json(new ApiResponse(200, tasks));
});

const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  try {
    if (!status && !name) {
      throw new ApiError(400, "Task name or status is required");
    }
    const task = await Task.findById(id);
    if (!task) {
      throw new ApiError(400, "Task not found");
    }
    const updateTask = await Task.findByIdAndUpdate(
      id,
      { name, status },
      { new: true }
    );
    if (!updateTask) {
      throw new ApiError(400, "Task not updated");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, updateTask, "Task updated successfully!"));
  } catch (error) {
    throw new ApiError(400, "Error while upgating the task", error.message);
  }
});

const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      throw new ApiError(400, "Task not found");
    }
    const deletedTask = await Task.findByIdAndDelete(id);
    console.log(`Task deleted: ${deletedTask}`);
    return res
      .status(200)
      .json(new ApiResponse(200, deletedTask, "Task Deleted successfully"));
  } catch (error) {
    throw new ApiError(400, "Error while deleting", error.message);
  }
});

const deleteAllTasks = asyncHandler(async (req, res) => {
  try {
    const deletedTasks = await Task.deleteMany({});
    return res
      .status(200)
      .json(
        new ApiResponse(200, deletedTasks, "All Tasks Deleted successfully")
      );
  } catch (error) {
    throw new ApiError(400, "Error while deleting", error.message, );
  }
});

export { addTask, getAllTasks, updateTask, deleteTask, deleteAllTasks };
