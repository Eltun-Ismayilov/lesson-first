
import { ParseIntPipe } from '@nestjs/common'
import {SequelizeModuleOptions} from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface'
import { Dialect } from 'sequelize/types'

const dialect=process.env.DB_DIALECT as Dialect

export const dbConfig:SequelizeModuleOptions={
    dialect,
    host:process.env.DB_HOST,
    port:parseInt(process.env.PORT,10),
    username:process.env.DB_UN,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    synchronize:true,
    autoLoadModels:true,
    models:[]

}