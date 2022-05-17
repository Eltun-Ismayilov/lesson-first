import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/auth.guard';
import { CreateUsersDto } from '../dtos/create-users.dto';
import { UpdateUsersDto } from '../dtos/update-users.dto';
import { UsersService } from '../serices/users.service';


@ApiTags('Users')
@Controller({path:'UserController',version:'1'})

export class UsersController {
    constructor(private service: UsersService) { }
    //1
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({
        summary: 'List of Users',
        description: '[Public] Get list of Users',
    })
    @Get()
    async list() {
        return await this.service.Get();
    }
    //2
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({
        summary: 'Detils of given User',
        description: '[Public] Detils of given User',
    })
    @ApiParam({ name: 'id' })
    @Get(':id')
    async get(@Param() params) {
        return await this.service.Details(params.id);
    }
    //3
    @ApiOperation({
        summary: 'Create User',
        description: '[Public] Create Users',
    })
    @Post()
    async store(@Body() body: CreateUsersDto) {
        return await this.service.Create(body);
    }
    //4
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({
        summary: 'Update User',
        description: '[AuthRequired] Update Users',
    })
    @ApiParam({ name: 'id' })
    @Put(':id')
    async put(@Param() params, @Body() body: UpdateUsersDto) {
        return await this.service.Put(params.id, body);
    }
    //5
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({
        summary: 'Delete User',
        description: '[AuthRequired] Delete Users',
    })
    @ApiParam({ name: 'id' })
    @Delete(':id')
    async delete(@Param() params) {
        return await this.service.Delete(params.id);
    }
    @ApiOperation({
        summary: 'Confirm User Email',
        description: '[AuthRequired] Confirm User Email',
      })
      @ApiParam({ name: 'token' })
      @Get('confirm/:token')
      async confirm(@Param() params) {
        return await this.service.confirmEmail(params.token);
      }
}
