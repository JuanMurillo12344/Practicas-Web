import { AppDataSource } from "./database";
import { SeguroCarro } from "./entities/Seguro_Carro";
import { Accesorio } from "./entities/Accesorios";
import { Multa } from "./entities/Multas";
import { HistorialMantenimiento } from "./entities/Historial_Mantenimiento";
import { HistorialUbicacion } from "./entities/Historiol_Ubicacion";

// ---------------------- CRUD SEGURO CARRO ----------------------

export const crearSeguro = async (datos: Partial<SeguroCarro>) => {
    const repo = AppDataSource.getRepository(SeguroCarro);
    const nuevo = repo.create(datos);
    return await repo.save(nuevo);
};

export const obtenerSeguros = async () => {
    return await AppDataSource.getRepository(SeguroCarro).find({
        relations: ["historialesMantenimiento", "multas"],
    });
};

export const actualizarSeguro = async (id: number, datos: Partial<SeguroCarro>) => {
    const repo = AppDataSource.getRepository(SeguroCarro);
    await repo.update(id, datos);
    return await repo.findOneBy({ id });
};

export const eliminarSeguro = async (id: number) => {
    return await AppDataSource.getRepository(SeguroCarro).delete(id);
};

// ---------------------- CRUD ACCESORIOS ----------------------

export const crearAccesorio = async (datos: Partial<Accesorio>) => {
    const repo = AppDataSource.getRepository(Accesorio);
    const nuevo = repo.create(datos);
    return await repo.save(nuevo);
};

export const obtenerAccesorios = async () => {
    return await AppDataSource.getRepository(Accesorio).find();
};

export const actualizarAccesorio = async (id: number, datos: Partial<Accesorio>) => {
    const repo = AppDataSource.getRepository(Accesorio);
    await repo.update(id, datos);
    return await repo.findOneBy({ id });
};

export const eliminarAccesorio = async (id: number) => {
    return await AppDataSource.getRepository(Accesorio).delete(id);
};

// ---------------------- CRUD MULTAS ----------------------

export const crearMulta = async (datos: Partial<Multa>) => {
    const repo = AppDataSource.getRepository(Multa);
    const nueva = repo.create(datos);
    return await repo.save(nueva);
};

export const obtenerMultas = async () => {
    return await AppDataSource.getRepository(Multa).find({
        relations: ["seguroCarro"],
    });
};

export const actualizarMulta = async (id: number, datos: Partial<Multa>) => {
    const repo = AppDataSource.getRepository(Multa);
    await repo.update(id, datos);
    return await repo.findOneBy({ id });
};

export const eliminarMulta = async (id: number) => {
    return await AppDataSource.getRepository(Multa).delete(id);
};

// ---------------------- CRUD HISTORIAL MANTENIMIENTO ----------------------

export const crearHistorialMantenimiento = async (datos: Partial<HistorialMantenimiento>) => {
    const repo = AppDataSource.getRepository(HistorialMantenimiento);
    const nuevo = repo.create(datos);
    return await repo.save(nuevo);
};

export const obtenerHistorialesMantenimiento = async () => {
    return await AppDataSource.getRepository(HistorialMantenimiento).find({
        relations: ["seguroCarro"],
    });
};

export const actualizarHistorialMantenimiento = async (id: number, datos: Partial<HistorialMantenimiento>) => {
    const repo = AppDataSource.getRepository(HistorialMantenimiento);
    await repo.update(id, datos);
    return await repo.findOneBy({ id });
};

export const eliminarHistorialMantenimiento = async (id: number) => {
    return await AppDataSource.getRepository(HistorialMantenimiento).delete(id);
};

// ---------------------- CRUD HISTORIAL UBICACIÓN ----------------------

export const crearHistorialUbicacion = async (datos: Partial<HistorialUbicacion>) => {
    const repo = AppDataSource.getRepository(HistorialUbicacion);
    const nuevo = repo.create(datos);
    return await repo.save(nuevo);
};

export const obtenerHistorialesUbicacion = async () => {
    return await AppDataSource.getRepository(HistorialUbicacion).find();
};

export const actualizarHistorialUbicacion = async (id: number, datos: Partial<HistorialUbicacion>) => {
    const repo = AppDataSource.getRepository(HistorialUbicacion);
    await repo.update(id, datos);
    return await repo.findOneBy({ id });
};

export const eliminarHistorialUbicacion = async (id: number) => {
    return await AppDataSource.getRepository(HistorialUbicacion).delete(id);
};
