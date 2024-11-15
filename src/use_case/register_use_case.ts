import AuthRepository from '../repository/auth_repository';
import JwtService from "../services/jwt_service";
import PasswordService from '../services/password_service';

class RegisterUseCase {
    private jwtService: JwtService;
    private authRepository: AuthRepository;
    private passwordService: PasswordService
    constructor(
        jwtService: JwtService, 
        authRepository: AuthRepository,
        passwordService: PasswordService) {
            this.jwtService = jwtService;
            this.authRepository = authRepository;
            this.passwordService = passwordService;
    }

    async Execute(username: string, email: string, password: string): Promise<string> {
        const user = await this.authRepository.FindByEmail(email);
        if (!user) {
            const hashedPassword = await this.passwordService.HashPassword(password);

            const newUser = await this.authRepository.SaveUser(username, email, hashedPassword);

            // Create Jwt token
            const token = this.jwtService.GenerateToken(newUser._id as string, email );
            return token;
        }
        throw new Error("User has been registered");
    }
}

export default RegisterUseCase;