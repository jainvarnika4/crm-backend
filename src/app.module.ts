import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CatsModule } from './modules/cats-module/cats.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DatabaseModule, CatsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
