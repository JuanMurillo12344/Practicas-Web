import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { SeguroCarro } from "./Seguro_Carro";

@Entity()
export class Multa {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    motivo!: string;

    @Column("decimal", { precision: 10, scale: 2 })
    monto!: number;

    @Column()
    fecha!: Date;

    @ManyToOne(() => SeguroCarro, (seguro) => seguro.multas)
    seguroCarro!: SeguroCarro;
}
