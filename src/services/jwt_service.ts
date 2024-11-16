import jwt, { JwtPayload } from "jsonwebtoken";
import { BadRequestError } from "../exceptions/exceptions.js";
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
            userMail: userMail,
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

    VerifyGetToken(inputToken: string): JwtPayload | string {
        try {
            return jwt.verify(inputToken, this.secretKey);
        } catch(e) {
            throw new BadRequestError("Error when parsing token");
        }
    }

} 

export default JwtService;