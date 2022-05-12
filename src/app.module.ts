import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { dbConfig } from './core/config/db.config';


@Module({
  imports: [
    SequelizeModule.forRoot(dbConfig)
  ],
  controllers: [AppController]
})
export class AppModule {}
