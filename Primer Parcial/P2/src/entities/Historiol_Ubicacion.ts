import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class HistorialUbicacion {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    latitud!: string;

    @Column()
    longitud!: string;

    @Column()
    Fecha!: Date;
}
