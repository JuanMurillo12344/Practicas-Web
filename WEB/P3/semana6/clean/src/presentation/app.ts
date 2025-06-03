import express from 'express';
import combustibleRoutes from '../routes/combustible.routes';
import mantenimientoRoutes from '../routes/mantenimiento.routes';
import seguroRoutes from '../routes/seguro.routes';
import tipoVehiculoRoutes from '../routes/tipovehiculo.routes';
import vehiculoRoutes from '../routes/vehiculo.routes';

const app = express();
app.use(express.json());

app.use('/api/combustibles', combustibleRoutes);
app.use('/api/mantenimientos', mantenimientoRoutes);
app.use('/api/seguros', seguroRoutes);
app.use('/api/tipos-vehiculo', tipoVehiculoRoutes);
app.use('/api/vehiculos', vehiculoRoutes);

export default app;
