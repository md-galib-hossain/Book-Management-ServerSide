import { Schema, model } from "mongoose";
import { TUser, TUserModel } from "./user.interface";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {

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

UserSchema.pre('find', function (next){
    this.find({isDeleted : { $ne : true}}).select('+password')
    next()
})
//pre save middleware
UserSchema.pre("save",async function (next) {
    //hashing password and save to db
    const user = this;
    user.password = await bcrypt.hash(user.password, 8);
    next()
  });

UserSchema.statics.isUserexists = async function (email: string) {
    const existingUser = await UserModel.findOne({email : email})
    return existingUser
}


UserSchema.statics.isPasswordMatched = async function (
    plainTextPassword : string,
    hashedPassword : string,
  ) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  };
  

export const UserModel = model<TUser,TUserModel>("user", UserSchema);
