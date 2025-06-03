import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { CombustibleEntity } from '../../data/typeorm/entities/CombustibleEntity';
import { VehiculoEntity } from '../../data/typeorm/entities/VehiculoEntity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [
    CombustibleEntity, VehiculoEntity,
    // tus entidades aquí
  ],
});
