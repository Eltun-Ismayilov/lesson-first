
import {SequelizeModuleOptions} from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface'

//const dialect=process.env.DB_DIALECT as Dialect
export const dbConfig:SequelizeModuleOptions={
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'eltun123',
    database: 'Nest-js',
    synchronize: true,
    sync: {
        alter: true
    },
    autoLoadModels: true,
    models: []
}