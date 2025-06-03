import app from './app';
import { config } from 'dotenv';
import { AppDataSource } from '../infrastructure/datasource/typeorm.config'

config();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar la base de datos:', error);
  });
