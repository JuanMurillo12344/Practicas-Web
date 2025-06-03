import { model, Schema } from "mongoose";
const combustibleSchema = new Schema({
  id: String,
  tipo: String,
  cantidad: Number,
  vehiculoId: String,
}, { _id: false, versionKey: false });

export const CombustibleModel = model('Combustible', combustibleSchema);