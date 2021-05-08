import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'mysql-f6a329f-ffuqzt-f0c0.aivencloud.com',
    port: 12214,
    username: 'avnadmin',
    password: 'ime004qlmg24v4ew',
    database: 'defaultdb',
    autoLoadEntities: true, // Carga de forma automatica las entidades que tenemos en el proyecto
    synchronize: true, // Solor para dev, para prod es false. Cada vez que la coneccion inicia se sincroniza el las entidades y esquemas. 
}