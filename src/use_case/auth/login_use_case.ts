import { IUser } from "../../interfaces/interfaces.js";
import AuthRepository from "../../repository/auth_repository.js";
import JwtService from "../../services/jwt_service.js";
import PasswordService from "../../services/password_service.js";
import { BadRequestError } from '../../exceptions/exceptions.js';

class LoginUseCase {
    private jwtService: JwtService;
    private authRepository: AuthRepository;
    private passwordService: PasswordService;
    constructor(jwtService: JwtService,
                authRepository: AuthRepository,
                passwordService: PasswordService) {
                    this.jwtService = jwtService;
                    this.passwordService = passwordService;
                    this.authRepository = authRepository;
                    this.Execute = this.Execute.bind(this);
    }

    async Execute(username: string, password: string): Promise<string> {
        const user = await this.authRepository.FindByUsername(username);
        const isCorrect = await this.passwordService.VerifyPassword(password, (user as IUser).password);
        if (isCorrect) {
            const newToken = this.jwtService.GenerateToken((user as IUser)._id as string,(user as IUser).mail as string,)
            return newToken;
        }
        throw new BadRequestError("Invalid Credentials");
    }    
}

export default LoginUseCase;