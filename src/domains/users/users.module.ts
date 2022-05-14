import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './controllers/users.controller';
import { Users } from './models/users.model';
import { UsersService } from './serices/users.service';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  imports:[SequelizeModule.forFeature([Users])]
})
export class UsersModule {}
