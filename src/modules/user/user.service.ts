import AppError from "../../errors/AppError"
import { TUser } from "./user.interface"
import { UserModel } from "./user.model"

const createUserIntoDb =async (payload : TUser) => {
    if(await UserModel.isUserexists(payload.email)){
        throw new AppError(400, "Email already exists")
    }

const result = await UserModel.create(payload)
  // excluding the password from result
  const sanitizedResult = JSON.parse(JSON.stringify(result));
  delete sanitizedResult.password;

  return sanitizedResult;

}



export const UserService = {createUserIntoDb}