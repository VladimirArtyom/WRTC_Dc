import { Document } from "mongoose";
import { IAuthDAO } from "../interfaces/interfaces";

export class AuthRepository {
    private authDAO: IAuthDAO
    constructor(authDAO: IAuthDAO) {
        this.authDAO = authDAO;
        this.FindByEmail = this.FindByEmail.bind(this);
        this.GetUsers = this.GetUsers.bind(this);
        this.SaveUser = this.SaveUser.bind(this);
    }   

    async FindByEmail(mail: string): Promise<Document> {
        return await this.authDAO.FindUserByMail(mail);
    }

    async GetUsers(): Promise<Document[]> {
        return await this.authDAO.GetUsers();
    }

    async SaveUser(username: string, mail: string, encryptedPassword: string): Promise<Document> {
        return await this.authDAO.SaveUser(username, mail, encryptedPassword);
    }
    
}

export default AuthRepository;