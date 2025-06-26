import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { HistorialMantenimiento } from "./Historial_Mantenimiento";
import { Multa } from "./Multas";

@Entity()
export class SeguroCarro {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    compania!: string;

    @Column()
    tipoCobertura!: string;

    @Column("decimal", { precision: 10, scale: 2 })
    costo!: number;

    @OneToMany(() => HistorialMantenimiento, (hm) => hm.seguroCarro)
    historialesMantenimiento!: HistorialMantenimiento[];

    @OneToMany(() => Multa, (multa) => multa.seguroCarro)
    multas!: Multa[];
}
