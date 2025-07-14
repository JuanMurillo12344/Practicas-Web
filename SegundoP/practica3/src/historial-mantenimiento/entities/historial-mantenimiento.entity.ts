import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class HistorialMantenimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehiculoId: number;

  @Column()
  fecha: string;

  @Column()
  descripcion: string;

  @Column()
  costo: number;
}
