import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private readonly mailService: MailerService) { }

    public async sendText({ to, subject, text }): Promise<void> {

        return await this.mailService.sendMail({
            to,
            subject,
            text,
        });
    }


    public async sendHTML({ to, subject, html }): Promise<void> {
        return await this.mailService.sendMail({
            to,
            subject,
            html,
        });
    }

    public async sendTemplate({ to, subject, payload }): Promise<void> {
        return await this.mailService.sendMail({
            to,
            subject,
            context: {
                firstname: payload.firstname,
                lastname: payload.lastname,
                patronymic: payload.patronymic
            },
            template: '../templates/mail-template.hbs',

        })
    }

}

