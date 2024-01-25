import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    username: {
        type: String,
        required: true,
        
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    passwordChangedAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: ["user"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model("user", UserSchema);
