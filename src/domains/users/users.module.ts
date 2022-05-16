import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './controllers/users.controller';
import { Users } from './models/users.model';
import { UsersService } from './serices/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[SequelizeModule.forFeature([Users])]
})
export class UsersModule {}
