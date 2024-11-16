import { Document } from "mongoose";
import { IAuthDAO } from "../interfaces/interfaces";
import { ResourceNotFoundError } from "../exceptions/exceptions.js";

export class AuthRepository {
    private authDAO: IAuthDAO
    constructor(authDAO: IAuthDAO) {
        this.authDAO = authDAO;
        this.FindByEmail = this.FindByEmail.bind(this);
        this.GetUsers = this.GetUsers.bind(this);
        this.SaveUser = this.SaveUser.bind(this);
        this.VerifyUser = this.VerifyUser.bind(this)
    }   

    async FindByEmail(mail: string): Promise<Document> {
        const user =  await this.authDAO.FindUserByMail(mail);
        if (!user){
            throw new ResourceNotFoundError("AuthRepository", "User", mail);
        }
        return user;
    }

    async FindByUsername(username: string): Promise<Document> {
        const user = await this.authDAO.FindUserByUsername(username);
        if (!user) {
            throw new ResourceNotFoundError("AuthRepository", "User", username);
        }
        return user;
    }

    async GetUsers(): Promise<Document[]> {
        return await this.authDAO.GetUsers();
    }

    async SaveUser(username: string, mail: string, encryptedPassword: string): Promise<Document> {
        const user = await this.authDAO.SaveUser(username, mail, encryptedPassword);
        if (!user){
            throw new ResourceNotFoundError("AuthRepository", "User", username);
        }
        return user;

    }

    async VerifyUser(username: string, encryptedPassword: string): Promise<Document> {
        const user = await this.authDAO.VerifyUser(username, encryptedPassword);
        if (!user){
            throw new ResourceNotFoundError("AuthRepository", "User", username);
        }
        return user;
    }

    
}

export default AuthRepository;