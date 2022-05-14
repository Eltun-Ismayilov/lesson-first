import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, isEmail, IsNotEmpty } from 'class-validator';

export class CreateUsersDto {
  //Name
  @ApiProperty({
    description: 'Name of User',
  })
  @IsNotEmpty()
  public name: string;

  //Lastname
  @ApiProperty({
    description: 'Lastname of User',
  })
  @IsNotEmpty()
  public lastname: string;

  //Patronymic
  @ApiProperty({
    description: 'Patronymic of User',
  })
  @IsNotEmpty()
  public patronymic: string;

  //Email
  @ApiProperty({
    description: 'Email of User',
  })
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  //Password
  @ApiProperty({
    description: 'Password of User',
  })
  
  @IsNotEmpty()
  public password: string;
}
