import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginUserDto{
    @ApiProperty({
        description:"Email of user",
        required:true
    })
    @IsNotEmpty()
    @IsEmail()
    public email:string 

    @ApiProperty({
        description:"Password of user",
    })
    @IsEmail()
    @MinLength(4)
    public password:string 

}