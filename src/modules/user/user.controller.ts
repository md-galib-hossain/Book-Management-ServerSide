import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { UserService } from "./user.service"

const CreateUser = catchAsync(async (req,res)=> {
    const user = req.body
    const result = await UserService.createUserIntoDb(user)
sendResponse(res,{
statusCode : httpStatus.OK,
success: true,
message: "User created Successfully",
data : result
})    
    })

export const UserController = {CreateUser}