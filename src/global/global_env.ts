import dotenv from 'dotenv';
import path from 'path';
const absPath = path.resolve("./src");
const env_path = path.join(absPath, ".env");
dotenv.config({path:env_path})
export default class GlobalEnv{
    static PORT: number = Number(process.env.PORT) || 8000;
    static MONGO_URI: string = process.env.MONGO_URI;
    static EXPIRATION: string = process.env.EXPIRATION;
    static SECRET_KEY: string = process.env.SECRET_KEY;
    static SALT_ROUND: number = Number(process.env.SALT_ROUND);
}