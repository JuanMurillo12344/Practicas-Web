import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class HistorialMantenimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehiculoId: string;

  @Column()
  fecha: string;

  @Column()
  descripcion: string;

  @Column('float')
  costo: number;
}
