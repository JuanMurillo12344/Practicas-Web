import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Multa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehiculoId: number;

  @Column()
  fecha: string;

  @Column()
  motivo: string;

  @Column()
  valor: number;

  @Column({ default: false })
  pagada: boolean;
}
