import { Types } from "mongoose";

export type TLoginUser = {
  email: string;
  password: string;
};
export type TjwtPayload = {
  username : string;
  email: string;
  password : string;
  role : 'user'
  _id : Types.ObjectId;
 
}