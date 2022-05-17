import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginUserDto{
    //email
    @ApiProperty({
        description:"Email of user",
        required:true
    })
    @IsNotEmpty()
    @IsEmail()
    public email:string 
    //password
    @ApiProperty({
        description:"Password of user",
    })
    @MinLength(4)
    public password:string 

}