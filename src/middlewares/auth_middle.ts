import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../exceptions/exceptions.js';
import JwtService from '../services/jwt_service.js';
import { IAuthenticatedUserBody } from '../interfaces/interfaces.js';

class AuthMiddleware {
    private jwtService: JwtService;
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.VerifyToken = this.VerifyToken.bind(this);
    }
    VerifyToken(req: Request, _res: Response, next: NextFunction) {
        let token: string = req.body.token || req.query.token || req.headers["authorization"];

        if (!token) {
            const err = new BadRequestError("A token is Required");
            next(err);
            return;
        }
        token = token.replace(/^Bearer\ /, "");
        console.log(token);
        const decoded = this.jwtService.VerifyGetToken(token);
        const {userId, userMail} = decoded as {userId, userMail};
        (req as IAuthenticatedUserBody).user = {userId, userMail};

        console.log((req as IAuthenticatedUserBody).user);
        next();
        return;
    }

}
export default AuthMiddleware;