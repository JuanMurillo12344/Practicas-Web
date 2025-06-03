import 'reflect-metadata';
import dotenv from 'dotenv';
import { AppDataSource } from './infrastructure/datasource/typeorm.config';
import app from './presentation/app';

dotenv.config();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Base de datos conectada');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar la base de datos:', error);
  });
