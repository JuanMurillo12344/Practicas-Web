import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Multa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  conductor: string;

  @Column()
  tipo: string;

  @Column()
  fecha: string;

  @Column('float')
  monto: number;
}
