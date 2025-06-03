import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
@Entity('mantenimientos')
export class MantenimientoEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  descripcion!: string;

  @Column()
  fecha!: string;

  @Column()
  vehiculoId!: string;
}