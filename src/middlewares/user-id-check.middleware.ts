/* eslint-disable prettier/prettier */
import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class UserIdCheckMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {

        console.log('UserCheckMiddleware', 'antes')

        if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
            throw new  BadRequestException('ID inválido');
        }
        console.log('UserCheckMiddleware', 'depois')

        next();

    }
     
}