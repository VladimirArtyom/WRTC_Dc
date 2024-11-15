import { Model, Document }from 'mongoose';
import { IUser, IAuthDAO } from '../interfaces/interfaces';
class AuthDAO implements IAuthDAO{
    private userModel: Model<IUser>;
    constructor(userModel : Model<IUser>){
        this.userModel = userModel;

        // Bind the function
        this.FindUserByMail = this.FindUserByMail.bind(this);
        this.GetUsers = this.GetUsers.bind(this);
        this.SaveUser = this.SaveUser.bind(this);
    }

    async FindUserByMail(mail: String): Promise<Document> {
        const user = await this.userModel.findOne({mail: mail});
        return user;
    }

    async GetUsers(): Promise<Document[]> {
        const user = await this.userModel.find();
        return user;
    }

    async SaveUser(username: String, mail: String, encryptedPassword: String) : Promise<Document>{
        const user = await this.userModel.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword
        });

        return user;
    }
    
}

export default AuthDAO;