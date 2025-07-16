// src/modules/administracion/entities/empleado.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export class Empleado {
  @PrimaryGeneratedColumn()
  id_empleado: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  cargo: string;

  @Column({ length: 100, unique: true })
  correo: string;

  @Column({ length: 15 })
  telefono: string;

  @Column()
  usuario: number;
}