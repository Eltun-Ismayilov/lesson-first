import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/domains/users/users.module';
import { AuthController } from './controllers/controllers.controller';
import { AuthService } from './service/auth.service';
import { JwtStrategy } from './strategiers/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'salam',
    signOptions: { expiresIn: '3600s' }
  })]
})
export class AuthModule { }
