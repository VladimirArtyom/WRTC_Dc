import { AuthRepository } from "../repository/auth_repository";
import { Document } from "mongoose";

class AuthServices {
    private authRepo: AuthRepository
    constructor(authRepository: AuthRepository) {
        this.authRepo = authRepository;
        this.FindUserByEmail = this.FindUserByEmail.bind(this);
    }

    async FindUserByEmail(mail : string): Promise<Document> {
        return await this.authRepo.FindByEmail(mail);
    }

}

export default AuthServices;