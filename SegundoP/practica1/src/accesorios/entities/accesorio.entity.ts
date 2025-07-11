import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Accesorio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @Column('float')
  precio: number;

  @Column()
  disponible: boolean;
}
