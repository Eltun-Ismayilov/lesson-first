import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';
import { dbConfig } from './core/config/db.config';
import { recatchaConfig } from './core/config/recaptcha.config';
import { UsersModule } from './domains/users/users.module';
import { AuthModule } from './core/auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailConfig } from './core/config/mail.config';
import { MailingModule } from './core/mailing/mailing.module';


@Module({
  imports: [
    SequelizeModule.forRoot(dbConfig),
    GoogleRecaptchaModule.forRoot(recatchaConfig),
    MailerModule.forRoot(mailConfig),
    AuthModule,
    UsersModule,
    MailingModule
  ],
})
export class AppModule {}
