import { NextFunction, Request, Response } from "express";
import RegisterUseCase from "../../use_case/register_use_case";
import LoginUseCase from '../../use_case/login_use_case';
class AuthController {
    //private authService: AuthServices;
    private registerUserCase: RegisterUseCase;
    private loginUseCase: LoginUseCase;
    constructor(registerUseCase: RegisterUseCase, loginUseCase: LoginUseCase) {
        this.registerUserCase = registerUseCase;
        this.loginUseCase = loginUseCase;
        //this.FindByEmail = this.FindByEmail.bind(this);
        this.RegisterNewUser = this.RegisterNewUser.bind(this);
        this.LoginUser = this.LoginUser.bind(this);
    }

    async RegisterNewUser(req: Request, res: Response, next: NextFunction) {
        try {
            const {username, mail, password} = req.body;

            const token = await this.registerUserCase.Execute(username, mail, password);
            res.status(200).json(token);
        } catch(e) {
            next(e);
        }
    }

    async LoginUser(req: Request, res: Response, next: NextFunction) {
        try {
            const {username, password} = req.body;

            const token = await this.loginUseCase.Execute(username, password);
            res.status(200).json(token);
        } catch(e) {
            next(e)
        }
        
    }
}  

export default AuthController;