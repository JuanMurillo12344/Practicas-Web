import {Entity,PrimaryGeneratedColumn,Column} from "typeorm"

@Entity('tipos_vehiculo')
export class TipoVehiculoEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;
}
