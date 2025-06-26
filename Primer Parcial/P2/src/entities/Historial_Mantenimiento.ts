import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { SeguroCarro } from "./Seguro_Carro";

@Entity()
export class HistorialMantenimiento {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descripcion!: string;

    @Column()
    fecha!: Date;

    @ManyToOne(() => SeguroCarro, (seguro) => seguro.historialesMantenimiento)
    seguroCarro!: SeguroCarro;
}
