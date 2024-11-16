import mongoose from "mongoose";
import { IUser } from "../interfaces/interfaces.js";

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
    friends: [{type: mongoose.Types.ObjectId, ref: "User"}],
    
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;