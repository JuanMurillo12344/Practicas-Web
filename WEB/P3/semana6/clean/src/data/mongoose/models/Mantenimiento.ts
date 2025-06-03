import { model, Schema } from "mongoose";
const mantenimientoSchema = new Schema({
  id: Number,
  descripcion: String,
  fecha: String,
  vehiculoId: String,
}, { _id: false, versionKey: false });

export const MantenimientoModel = model('Mantenimiento', mantenimientoSchema);
