import express, { Router } from 'express';
import mongoose from 'mongoose';
import {json} from 'express';
import cors from 'cors';
import http from 'http';
import GlobalEnv from './global/global_env.js';
import AuthController from './controllers/auth/auth_controller.js';
import AuthRepository from './repository/auth_repository.js';
import AuthDAO from './DAO/AuthDAO.js';
import UserModel from './models/user.js';
import AuthRoutes from './routes/authRoutes/auth_rotes.js';
import RegisterUseCase from './use_case/register_use_case.js';
import JwtService from './services/jwt_service.js';
import PasswordService from './services/password_service.js';
const port: number  = GlobalEnv.PORT;
const expiration: string = GlobalEnv.EXPIRATION;
const secret_key: string = GlobalEnv.SECRET_KEY;
const salt_round = GlobalEnv.SALT_ROUND;

const authDAO = new AuthDAO(UserModel);
const authRepository = new AuthRepository(authDAO);

// Tout les services
const jwtService = new JwtService(secret_key, expiration);
const passwordService = new PasswordService(salt_round)
// Tout le cas d'utilisation (All use cases)
const registerUseCase = new RegisterUseCase(
    jwtService,
    authRepository,
    passwordService
);

const authController = new AuthController(registerUseCase);
const authRouter = new AuthRoutes(Router(), authController);

const app = express();

app.use(json());
app.use(cors());

app.use("/api", authRouter.get_router());
const server = http.createServer(app);

try {
    mongoose.connect(GlobalEnv.MONGO_URI).then( () => {
        server.listen(port, () => {
            console.log(`Server is listening at ${port}`);
        });
    });
}catch(e) {
    console.log("Dayum");
}



