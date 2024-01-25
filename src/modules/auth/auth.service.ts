import bcrypt from "bcrypt";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import AppError from "../../errors/AppError";
import { TLoginUser } from "./auth.interface";
import { UserModel } from "../user/user.model";
import { createToken } from "./auth.utils";
import config from "../../config";

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const dbuser = await UserModel.isUserexists(payload.email);
  if (!dbuser) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }

  //checking if the password is correct

  const checkedUser = await UserModel.isPasswordMatched(
    payload?.password,
    dbuser?.password
  );
  if (!checkedUser) {
    throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");
  }

  //create token and sent to the  client

  const jwtPayload = {
    _id: dbuser._id as string,
    role: dbuser.role,
    email: dbuser.email,
  };

  const accessToken = createToken(
    jwtPayload,
    config.JWT_ACCESS_SECRET,
    config.JWT_ACCESS_EXPIRES_IN
  );

  // excluding the password from result
  const user = JSON.parse(JSON.stringify(dbuser));
  delete user.password;

  return {
    accessToken,

    user,
  };
};




export const AuthServices = {
  loginUser,
   
};
