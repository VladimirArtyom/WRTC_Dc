import express, { Router } from 'express';
import AuthController from '../../controllers/auth/auth_controller';
import AuthMiddleware from '../../middlewares/auth_middle';

export default class AuthRoutes {
    private router: Router;
    private authController: AuthController;
    private authMiddleware: AuthMiddleware;
    constructor(router: Router, authController: AuthController, authMiddleware) {
        this.authMiddleware = authMiddleware;
        this.router = router;
        this.authController = authController;  
        this.init_router = this.init_router.bind(this);
        this.get_router = this.get_router.bind(this);
        
        this.init_router();
    }
    private init_router(){
        this.router.post("/register", this.authController.RegisterNewUser);
        this.router.post("/login", this.authController.LoginUser);

        this.router.get("/mid",this.authMiddleware.VerifyToken,(_, res) => {
            res.send("request passwe");
        })
    }

    public get_router(): Router {
        return this.router;
    }
}

