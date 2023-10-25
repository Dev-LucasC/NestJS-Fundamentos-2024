/* eslint-disable prettier/prettier */
import { ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { Controller, Post, Body, Get, Param, Put, Patch, Delete } from '@nestjs/common';
import { UpdatePutUserDTO } from './dto/update-put-user.dto'
import { UserService } from './user.service';
import { UpdatePatchUserDTO} from './dto/update-patch-user.dto'


@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    /*@UsePipes(new ValidationPipe())*/
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data);
    }

    @Get()
    async list() {
        return this.userService.list();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number) {
        return this.userService.show(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async update(@Body() data: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.userService.update(id, data);
    }

    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.userService.updatePartial(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return {
            id
        }
    }

}
