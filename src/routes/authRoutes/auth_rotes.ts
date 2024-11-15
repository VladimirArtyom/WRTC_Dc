import express, { Router } from 'express';
import AuthController from '../../controllers/auth/auth_controller';

export default class AuthRoutes {
    private router: Router;
    private authController: AuthController;
    constructor(router: Router, authController: AuthController) {
        this.router = router;
        this.authController = authController;  
        this.init_router = this.init_router.bind(this);
        this.get_router = this.get_router.bind(this);
        this.init_router();
    }
    private init_router(){
        this.router.post("/test", this.authController.RegisterNewUser);
    }

    public get_router(): Router {
        return this.router;
    }
}

