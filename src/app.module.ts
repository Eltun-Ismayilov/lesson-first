import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';
import { AppController } from './app.controller';
import { dbConfig } from './core/config/db.config';
import { recatchaConfig } from './core/config/recaptcha.config';


@Module({
  imports: [
    SequelizeModule.forRoot(dbConfig),
    GoogleRecaptchaModule.forRoot(recatchaConfig)
  ],
  controllers: [AppController]
})
export class AppModule {}
