import mongoose from "mongoose";
import { IUser } from "../interfaces/interfaces";

const UserSchema = new mongoose.Schema({
    mail: {
        type: String,
        unique: true,
    }, 
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    friends: mongoose.Types.ObjectId,
    
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;