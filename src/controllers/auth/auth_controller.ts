import { Request, Response } from "express";
import RegisterUseCase from "../../use_case/register_use_case";

class AuthController {
    //private authService: AuthServices;
    private registerUserCase: RegisterUseCase;
    constructor(registerUseCase: RegisterUseCase) {
        this.registerUserCase = registerUseCase;
        
        //this.FindByEmail = this.FindByEmail.bind(this);

        this.RegisterNewUser = this.RegisterNewUser.bind(this);
    }

    async RegisterNewUser(req: Request, res: Response) {
        const {username, mail, password} = req.body;

        const token = await this.registerUserCase.Execute(username, mail, password);
        res.status(200).json(token);
    }
}

export default AuthController;