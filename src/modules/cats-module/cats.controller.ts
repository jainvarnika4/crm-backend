import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  async findAll() {
    return await this.catsService.findAll();
  }

  @Post()
  async create(@Body() data: any) {
    console.log('Entered controller');
    return await this.catsService.create(data);
  }
}
