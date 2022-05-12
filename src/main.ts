import { Global, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { GlobalPipes } from './core/config/global-pipes.config';
import { SwaggerInit } from './core/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet()); // helmet (npm i --save helmet)
  app.enableCors();
  app.setGlobalPrefix('/api/') // yeni butun api yazilanda localhost:3000/api/ olsun
  app.enableVersioning({
    type:VersioningType.URI  // burda ise biz localhost:3000/api/vN olacaq (n=1,2,...n ola biler)
  });  
  SwaggerInit(app); // swagger using
  GlobalPipes(app); // Validatorlari yazmaq ucun using olunmus cod.
  await app.listen(process.env.PORT);
}  
bootstrap();
 