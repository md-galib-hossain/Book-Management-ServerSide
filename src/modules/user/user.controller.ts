import { UserService } from "./user.service"

const CreateUser =async (req,res)=> {
const user = req.body
const result =await UserService.createUserIntoDb(user)
return res.json(result)

}

export const UserController = {CreateUser}