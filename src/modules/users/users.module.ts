import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UsersContoller } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersContoller],
  providers: [UsersService, ...usersProviders],
})
export class UsersModule {}
