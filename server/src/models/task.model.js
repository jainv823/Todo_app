import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema)