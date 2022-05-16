import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/domains/users/models/users.model';
import { UsersService } from 'src/domains/users/serices/users.service';
import { AuthUserDso } from '../dsos/auth-user.dso';
import { LoginUserDto } from '../dtos/login-user.dto';
import { compare } from '../hashers/encryption';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) { }


    public async validatorser(dto: LoginUserDto) {
        const user = await this.getUserByEmail(dto);
        let valid = false;
        if (user) {
            valid = await compare(dto.password, user.password);
            return valid;
        }
        return false;
    }
    private async getUserByEmail(dto: LoginUserDto): Promise<Users | null> {
        return await this.userService.findByEmail(dto);
    }


    async login(dto: LoginUserDto) {
        if (await this.validatorser(dto)) {
            const user = await this.getUserByEmail(dto);
            const tokenData = new AuthUserDso(user);
            return this.jwtService.sign({...tokenData})
        } else {
            throw new UnauthorizedException();
        }
    }
}
