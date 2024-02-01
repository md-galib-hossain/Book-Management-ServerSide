import { Schema, model } from "mongoose";
import { TUser, TUserModel } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

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
    this.find({isDeleted : { $ne : true}})
    next()
})
//pre save middleware
UserSchema.pre("save",async function (next) {
    //hashing password and save to db
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.BCRYPT_SALT_ROUNDS));
    next()
  });

UserSchema.statics.isUserexists = async function (email: string) {
    const existingUser = await UserModel.findOne({email : email}).select("+password")
    return existingUser
}


UserSchema.statics.isPasswordMatched = async function (
    plainTextPassword : string,
    hashedPassword : string,
  ) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  };

  UserSchema.statics.isJWTIssuedBeforePasswordChanged = function (
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ) {
    const passwordChangedTime =
      new Date(passwordChangedTimestamp).getTime() / 1000;
    return passwordChangedTime > jwtIssuedTimestamp;
  };
  

export const UserModel = model<TUser,TUserModel>("user", UserSchema);
