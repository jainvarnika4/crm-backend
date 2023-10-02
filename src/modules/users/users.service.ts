import { Injectable, Inject } from '@nestjs/common';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof Users,
  ) {}

  async findOne(id: any) {
    return await this.usersRepository.findOne({
      where: id,
    });
  }

  async findAll() {
    return await this.usersRepository.findAll();
  }

  async create(data: any) {
    console.log('Entered Service');
    return await this.usersRepository.create({ ...data });
  }

  async update(id: any, data: any) {
    return await this.usersRepository.update({ ...data }, { where: id });
  }

  async delete(id: any) {
    return await this.usersRepository.destroy({ where: id });
  }
}
