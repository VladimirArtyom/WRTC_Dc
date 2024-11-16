import { Request, Response, NextFunction } from "express";
import { BadRequestError, ResourceNotFoundError } from "./exceptions.js";


export function ErrorHandler(err: Error, _req: Request, res: Response, _next :NextFunction){
    if (err instanceof ResourceNotFoundError) {
        res.status(err.statusCode).json({
            message: err.message,
            statusCode: err.statusCode
        })
        return;
    } else if (err instanceof BadRequestError) {
        res.status(err.statusCode).json({
            message: err.message,
            statusCode: err.statusCode
        })
        return;
    }

    res.status(500).json({
        message: "Something went wrong",
        statusCode: 500
    });
    return;
}