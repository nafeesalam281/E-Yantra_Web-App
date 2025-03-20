import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    projectDetail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


export const User = mongoose.model("User", userSchema);
