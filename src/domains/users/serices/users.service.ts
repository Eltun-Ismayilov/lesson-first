import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersDso } from '../dsos/user.dso';
import { Users } from '../models/users.model';
import { Response } from '../../../core/concrete/response'
import { CreateUsersDto } from '../dtos/create-users.dto';
import { UpdateUsersDto } from '../dtos/update-users.dto';
import { LoginUserDto } from 'src/core/auth/dtos/login-user.dto';
import { encrypt } from 'src/core/auth/hashers/encryption';
import { generateToken } from 'src/core/helper/generate-token';
import { Network } from 'src/core/helper/send-email';
import { ErrorResponse } from 'src/core/common/error-response';


@Injectable()
export class UsersService {
    constructor(@InjectModel(Users) private model: typeof Users, private mailService: Network,) { }
    async Get(): Promise<Response<UsersDso[]>> {
        const users = await this.model.findAll({
            attributes: ['id', 'name', 'lastname', 'patronymic', 'email'],
            where: {
                isActive: true,
            },
        });
        return new Response<UsersDso[]>(users);
    }
    async Details(id: number): Promise<Response<UsersDso>> {
        const user = await this.model.findOne({
            attributes: ['id', 'name', 'lastname', 'patronymic', 'email'],
            where: {
                id,
                isActive: true,
            },
        });
        return new Response<UsersDso>(user);
    }
    async Create(user: CreateUsersDto): Promise<Response<UsersDso> | ErrorResponse> {
        const isEmailExist = await this.findByEmail(user);
        if (isEmailExist) return new ErrorResponse(422, 'Email is already taken!');
        const token = await generateToken(); //Token create
        const users = await this.model.create(
            {
                ...user,
                password: await encrypt(user.password),
                isActive: true,
                confirmationCode: token,
                isEmailConfirmed: false,
            }
        );
        this.mailService.sendMail(
            users.email,
            'E-Mail Confirmation',
            'Please Confirm your E-Mail through this',
            token,
        );
        return new Response<Users>(users);
    }
    async Put(id: number, user: UpdateUsersDto) {
        const users = await this.model.update(
            {
                ...user,
                isActive: true,
                password: await encrypt(user.password),
            },
            { where: { id } },
        );
        return users;
    }
    async Delete(id: number) {
        const user = await this.model.findOne({ where: { id } });
        const deleted = await this.model.update({ ...user, isActive: false }, { where: { id } });
        return deleted;
    }
    public async findByEmail(dto: LoginUserDto) {
        return await this.model.findOne({
            where: {
                email: dto.email,
                isActive: true
            }
        })
    }
    async confirmEmail(token: string) {
        const user = await this.model.findOne({
            where: {
                confirmationCode: token,
                isActive: true,
            },
        });
        const id = user.id;
        if (user.isEmailConfirmed) {
            return new ErrorResponse(300, 'You have confirmed your E-Mail!')
        }
        await this.model.update(
            { ...user, isEmailConfirmed: true },
            { where: { id } },
        );
    }
}
