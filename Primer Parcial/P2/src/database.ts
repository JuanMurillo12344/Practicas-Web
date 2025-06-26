import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

import { SeguroCarro } from "./entities/Seguro_Carro";
import { Accesorio } from "./entities/Accesorios";
import { Multa } from "./entities/Multas";
import { HistorialMantenimiento } from "./entities/Historial_Mantenimiento";
import { HistorialUbicacion } from "./entities/Historiol_Ubicacion";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true, // Usa false en producción y aplica migraciones
    logging: false,
    entities: [
        SeguroCarro,
        Accesorio,
        Multa,
        HistorialMantenimiento,
        HistorialUbicacion,
    ],
    ssl: process.env.DATABASE_URL?.includes("neon.tech")
        ? { rejectUnauthorized: false }
        : undefined,
});

export async function iniciar() {
    try {
        await AppDataSource.initialize();
        console.log("Base de datos conectada correctamente.");
    } catch (error) {
        console.error("Error al conectar la base de datos:", error);
    }
}
