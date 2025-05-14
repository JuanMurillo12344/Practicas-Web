import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Accesorio {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    descripcion!: string;

    // Asumiendo que costoAdicional es un valor decimal y debe ser obligatorio
    @Column("decimal", { precision: 10, scale: 2, default: 0 })
    costoAdicional!: number;
}
