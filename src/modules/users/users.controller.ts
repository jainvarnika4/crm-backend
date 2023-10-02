import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersContoller {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  async getOne(@Param() id: any) {
    console.log(id);
    return await this.usersService.findOne(id);
  }

  @Get()
  async getAll() {
    return await this.usersService.findAll();
  }

  @Post()
  async create(@Body() data: any) {
    return await this.usersService.create(data);
  }

  @Put(':id')
  async update(@Body() data: any, @Param() id: any) {
    return await this.usersService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param() id: any) {
    return await this.usersService.delete(id);
  }
}
