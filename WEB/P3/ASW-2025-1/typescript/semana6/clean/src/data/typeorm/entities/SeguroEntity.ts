import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
@Entity('seguros')
export class SeguroEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nombre!: string;

  @Column()
  cobertura!: string;
}
