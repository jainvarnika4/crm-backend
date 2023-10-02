import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './cats.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof Cat,
  ) {}

  async findAll() {
    return await this.catsRepository.findAll();
  }

  async create(data: any) {
    console.log('Entered Service');
    return await this.catsRepository.create({ ...data });
  }
}
