/* eslint-disable prettier/prettier */
import { ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { Controller, Post, Body, Get, Param, Put, Patch, Delete } from '@nestjs/common';
import { UpdatePutUserDTO } from './dto/update-put-user.dto'
import { UserService } from './user.service';


@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    /*@UsePipes(new ValidationPipe())*/
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data);
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
    async update(@Body() {email, name, password}: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number)  {
        return {
            method: 'put',
            email, name, password,
            id
        }
    }

    @Patch(':id') 
    async updatePartial(@Body() body,  @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'patch',
            body,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return{
            id
        }
    }

}
