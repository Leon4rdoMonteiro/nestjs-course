import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5533,
  username: 'postgres',
  password: 'docker2b2apipg',
  database: 'nestjs-course',
  entities: [`${__dirname}/../**/*.entity.{js,ts}`],
  synchronize: true,
};
