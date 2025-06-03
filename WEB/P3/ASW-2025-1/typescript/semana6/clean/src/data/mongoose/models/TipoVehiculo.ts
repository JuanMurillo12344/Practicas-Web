import { model, Schema } from "mongoose";

const tipoVehiculoSchema = new Schema({
  id: String,
  nombre: String,
  descripcion: String,
}, { _id: false, versionKey: false });

export const TipoVehiculoModel = model('TipoVehiculo', tipoVehiculoSchema);