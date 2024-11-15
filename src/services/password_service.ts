import bcrypt from 'bcrypt';

class PasswordService {
    private salt_round: number;
    constructor(salt_round: number = 10) {
        this.salt_round = salt_round;

        this.HashPassword = this.HashPassword.bind(this);
        this.VerifyPassword = this.VerifyPassword.bind(this);
    }

    async HashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.salt_round);
    }

    async VerifyPassword(password: string, user_password): Promise<boolean> {
        return await bcrypt.compare(password, user_password);
    }

}

export default PasswordService;