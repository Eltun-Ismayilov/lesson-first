import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import path, { join } from 'path';
import { MailCondigs } from '../config/mail.config-heyder';
import { MailService } from './services/mail.service';
import { MailController } from './controller/mail.controller';

@Module({

    imports: [
        MailerModule.forRoot(new MailCondigs(join(__dirname+'/templates')))
    ],
    providers: [MailService],
    controllers: [MailController]
})



export class MailingModule { }
