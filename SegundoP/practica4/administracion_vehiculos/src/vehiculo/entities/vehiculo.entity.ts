// src/modules/vehiculos/entities/vehiculo.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehiculo {
  @PrimaryGeneratedColumn()
  id_vehiculo: number;

  @Column({ length: 10, unique: true })
  placa: string;

  @Column({ length: 50 })
  marca: string;

  @Column({ length: 50 })
  modelo: string;

  @Column('int')
  año: number;

  // Reemplaza la relación con un campo de ID
  @Column()
  tipo_id: number;

  @Column({ length: 20 })
  estado: string;

}
