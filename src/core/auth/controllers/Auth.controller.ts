import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { LoginUserDto } from '../dtos/login-user.dto';
import { AuthService } from '../service/auth.service';

@Controller({ path: "auth", version: '1' })
export class AuthController {
    constructor(private service: AuthService) { }

    @ApiOperation({ description: "Auth User" })
    @Post()
    async login(@Body() request: LoginUserDto) {
        return await this.service.login(request)
    } 
}

