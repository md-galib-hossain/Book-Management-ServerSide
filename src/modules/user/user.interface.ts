export type TUser = {
    // id : string;
    username : string;
    email: string;
    password : string;
    passwordChangedAt? : Date;
    role : 'user',
    isDeleted? : boolean
}