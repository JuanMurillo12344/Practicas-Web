// src/modules/clientes/entities/cliente.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id_cliente: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ length: 20, unique: true })
  cedula_pasaporte: string;

  @Column({ length: 200 })
  direccion: string;

  @Column({ length: 100, unique: true })
  correo: string;

  @Column({ length: 15 })
  telefono: string;

}
