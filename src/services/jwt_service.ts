import jwt from "jsonwebtoken";
class JwtService{
    private secretKey: string;
    private expiration: string;
    constructor(secretKey: string, expiration: string) {
        this.secretKey = secretKey;
        this.expiration = expiration;
    }

    GenerateToken(userId: string, userMail: string): string {
        return jwt.sign({
            userId: userId,
            mail: userMail,
        }, this.secretKey,
        {
            expiresIn: this.expiration
        });
    }

    VerifyToken(inputToken: string): boolean {
        try {
            jwt.verify(inputToken, this.secretKey);
            return true;
        } catch(e) {
            return false;
        }
    }

} 

export default JwtService;