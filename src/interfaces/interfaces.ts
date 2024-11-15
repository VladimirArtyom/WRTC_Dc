import { Document } from "mongoose";

interface IUser extends Document {
    mail: String;
    username: String;
    password: String;
}

interface IAuthDAO {
    FindUserByMail(mail: String): Promise<Document>;
    GetUsers(): Promise<Document[]>;
    SaveUser(username: String, mail: String, encryptedPassword: String) : Promise<Document>;
}

export {
    IUser,
    IAuthDAO
}