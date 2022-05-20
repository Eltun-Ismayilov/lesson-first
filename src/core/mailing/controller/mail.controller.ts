import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { MailService } from '../services/mail.service';

@Controller('mail')
export class MailController {

    constructor(private service:MailService){}
    @ApiOperation({
        summary:'Send Email',
        description:'[Public] Email Sender'
    })
    @Get()
    public send(){
        this.service.sendTemplate({
            to:'eltunhi@code.edu.az',
            subject:'Test edirem gagas',
            payload:{
                firstname: "salam",
                lastname: "salam",
                patronymic: "salam"
            }
        });
    }
}
