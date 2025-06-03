import { Schema, model } from 'mongoose';

const seguroSchema = new Schema({
  id: String,
  nombre: String,
  cobertura: String,
}, { _id: false, versionKey: false });

export const SeguroModel = model('Seguro', seguroSchema);