import { z } from "zod";

//  
//     id: string;
//     email: string;
//     password: string;
//     passwordChangedAt?: Date;
//     role: "user";
//     isDeleted: boolean;
//   

const CreateUserValidation = z.object({
    body : z.object({
        username: z.string({required_error : 'Username is required'}),
        // id: z.string({required_error : 'Id not provided'}),
        email : z.string({required_error : 'Email not provided'}).email(),
        password : z.string().min(8, {message : 'Password should be at least 8 characters'}).max(14,{message : 'Password can not be more than 14 characters'}),
        role : z.enum(["user"])
    })
})

  export const UserValidation = {CreateUserValidation}