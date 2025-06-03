import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
@Entity('vehiculos')
export class VehiculoEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  marca!: string;

  @Column()
  modelo!: string;

  @Column()
  anio!: number;

  @Column()
  tipoVehiculoId!: string;

  @Column()
  seguroId!: string;
}