import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import {INestApplication} from '@nestjs/common'

export function SwaggerInit(app:INestApplication)
{
    const config=new DocumentBuilder()
    .setTitle(process.env.APP_NAME)
    .setDescription('API Documentation for NestJS Test App')
    .setVersion(process.env.version)
    .addBearerAuth()
    .build();
    const document=SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('/swagger',app,document);
}