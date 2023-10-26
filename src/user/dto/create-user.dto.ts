/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsStrongPassword, IsOptional, IsDateString } from "class-validator";

export class CreateUserDTO {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @IsDateString()
    birthAt: string;

    @IsStrongPassword({
        minLength: 0,
        minNumbers: 0,
        minLowercase: 0,
        minUppercase: 0,
        minSymbols: 0
    })
    password: string;
}