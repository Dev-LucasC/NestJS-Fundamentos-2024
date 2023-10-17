/* eslint-disable prettier/prettier */
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { Controller, Post, Body, Get, Param, Put, Patch, Delete } from '@nestjs/common';
import { UpdatePutUserDTO } from './dto/update-put-user.dto'


@Controller('users')
export class UserController {

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createUserDto: CreateUserDTO) {
        return createUserDto;
    }

    @Get()
    async list() {
        return {users:[]}
    }

    @Get(':id')
    async show(@Param() params) {
        return {user:{}, params}
    }

    @Put(':id') 
    @UsePipes(new ValidationPipe())
    async update(@Body() {email, name, password}: UpdatePutUserDTO, @Param() params)  {
        return {
            method: 'put',
            email, name, password,
            params
        }
    }

    @Patch(':id') 
    async updatePartial(@Body() body,  @Param() params) {
        return {
            method: 'patch',
            body,
            params
        }
    }

    @Delete(':id')
    async delete(@Param() params) {
        return{
            params
        }
    }

}
