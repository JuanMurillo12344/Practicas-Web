import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('combustibles')
export class CombustibleEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  tipo!: string;

  @Column('float')
  cantidad!: number;

  @Column()
  vehiculoId!: string;
}
