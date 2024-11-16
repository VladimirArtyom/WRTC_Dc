import { Document } from "mongoose";
import { Request } from "express";

interface IUser extends Document {
    mail: String;
    username: String;
    password: String;
}
interface IAuthenticatedUserBody extends Request {
    user: {
        userId: string,
        userMail: string
    }
}

interface IAuthDAO {
    FindUserByUsername(username: String): Promise<Document>;
    FindUserByMail(mail: String): Promise<Document>;
    GetUsers(): Promise<Document[]>;
    SaveUser(username: String, mail: String, encryptedPassword: String) : Promise<Document>;
    VerifyUser(username: String, encryptedPassword: String): Promise<Document>;
    
}

export {
    IUser,
    IAuthDAO,
    IAuthenticatedUserBody
}