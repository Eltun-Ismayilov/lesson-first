import {INestApplication, ValidationPipe} from '@nestjs/common'

export function GlobalPipes(app:INestApplication)
{
    app.useGlobalPipes(new ValidationPipe({
        transform:true,// Front string formada 123 gelerse ozu aftomativ int cevirir.
    }));
};