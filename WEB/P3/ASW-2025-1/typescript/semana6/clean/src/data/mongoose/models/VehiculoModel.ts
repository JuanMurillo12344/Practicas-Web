import { model, Schema } from "mongoose";
const vehiculoSchema = new Schema({
  id: String,
  marca: String,
  modelo: String,
  anio: Number,
  tipoVehiculoId: String,
  seguroId: String,
}, { _id: false, versionKey: false });

export const VehiculoModel = model('Vehiculo', vehiculoSchema);