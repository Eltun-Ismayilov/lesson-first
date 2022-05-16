import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, isEmail, IsNotEmpty } from 'class-validator';

export class CreateUsersDto {
  //Name
  @ApiProperty({
    description: 'Name of User',
    required: true
  })
  @IsNotEmpty()
  public name: string;

  //Lastname
  @ApiProperty({
    description: 'Lastname of User',
    required: true
  })
  @IsNotEmpty()
  public lastname: string;

  //Patronymic
  @ApiProperty({
    description: 'Patronymic of User',
    required: true
  })
  @IsNotEmpty()
  public patronymic: string;

  //Email
  @ApiProperty({
    description: 'Email of User',
    required: true
  })
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  //Password
  @ApiProperty({
    description: 'Password of User',
    required: true
  })

  @IsNotEmpty()
  public password: string;
}
