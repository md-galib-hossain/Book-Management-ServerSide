import { TUser } from "./user.interface"
import { UserModel } from "./user.model"

const createUserIntoDb =async (payload : TUser) => {
const res = await UserModel.create(payload)
return res
}

export const UserService = {createUserIntoDb}