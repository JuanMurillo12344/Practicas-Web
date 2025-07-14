import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Accesorio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ default: true })
  disponible: boolean;
}
