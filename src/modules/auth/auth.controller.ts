import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req.body);
    const {accessToken, user } = result;
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is logged in succesfully!',
      data: {
        accessToken,
        user,
      },
    });
  });

  const changePassword = catchAsync(async (req, res) => {
    const { ...passwordData } = req.body;
    const token = req.headers.authorization
  console.log(passwordData,token,"sg")
    const result = await AuthServices.changePassword( passwordData,token as string);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Password changed successfully',
      data: result,
    });
  });

export const AuthControllers = {
    loginUser,
changePassword
  };
  