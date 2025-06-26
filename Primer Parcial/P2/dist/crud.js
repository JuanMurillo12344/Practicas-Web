"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarHistorialUbicacion = exports.actualizarHistorialUbicacion = exports.obtenerHistorialesUbicacion = exports.crearHistorialUbicacion = exports.eliminarHistorialMantenimiento = exports.actualizarHistorialMantenimiento = exports.obtenerHistorialesMantenimiento = exports.crearHistorialMantenimiento = exports.eliminarMulta = exports.actualizarMulta = exports.obtenerMultas = exports.crearMulta = exports.eliminarAccesorio = exports.actualizarAccesorio = exports.obtenerAccesorios = exports.crearAccesorio = exports.eliminarSeguro = exports.actualizarSeguro = exports.obtenerSeguros = exports.crearSeguro = void 0;
const database_1 = require("./database");
const Seguro_Carro_1 = require("./entities/Seguro_Carro");
const Accesorios_1 = require("./entities/Accesorios");
const Multas_1 = require("./entities/Multas");
const Historial_Mantenimiento_1 = require("./entities/Historial_Mantenimiento");
const Historiol_Ubicacion_1 = require("./entities/Historiol_Ubicacion");
// ---------------------- CRUD SEGURO CARRO ----------------------
const crearSeguro = async (datos) => {
    const repo = database_1.AppDataSource.getRepository(Seguro_Carro_1.SeguroCarro);
    const nuevo = repo.create(datos);
    return await repo.save(nuevo);
};
exports.crearSeguro = crearSeguro;
const obtenerSeguros = async () => {
    return await database_1.AppDataSource.getRepository(Seguro_Carro_1.SeguroCarro).find({
        relations: ["historialesMantenimiento", "multas"],
    });
};
exports.obtenerSeguros = obtenerSeguros;
const actualizarSeguro = async (id, datos) => {
    const repo = database_1.AppDataSource.getRepository(Seguro_Carro_1.SeguroCarro);
    await repo.update(id, datos);
    return await repo.findOneBy({ id });
};
exports.actualizarSeguro = actualizarSeguro;
const eliminarSeguro = async (id) => {
    return await database_1.AppDataSource.getRepository(Seguro_Carro_1.SeguroCarro).delete(id);
};
exports.eliminarSeguro = eliminarSeguro;
// ---------------------- CRUD ACCESORIOS ----------------------
const crearAccesorio = async (datos) => {
    const repo = database_1.AppDataSource.getRepository(Accesorios_1.Accesorio);
    const nuevo = repo.create(datos);
    return await repo.save(nuevo);
};
exports.crearAccesorio = crearAccesorio;
const obtenerAccesorios = async () => {
    return await database_1.AppDataSource.getRepository(Accesorios_1.Accesorio).find();
};
exports.obtenerAccesorios = obtenerAccesorios;
const actualizarAccesorio = async (id, datos) => {
    const repo = database_1.AppDataSource.getRepository(Accesorios_1.Accesorio);
    await repo.update(id, datos);
    return await repo.findOneBy({ id });
};
exports.actualizarAccesorio = actualizarAccesorio;
const eliminarAccesorio = async (id) => {
    return await database_1.AppDataSource.getRepository(Accesorios_1.Accesorio).delete(id);
};
exports.eliminarAccesorio = eliminarAccesorio;
// ---------------------- CRUD MULTAS ----------------------
const crearMulta = async (datos) => {
    const repo = database_1.AppDataSource.getRepository(Multas_1.Multa);
    const nueva = repo.create(datos);
    return await repo.save(nueva);
};
exports.crearMulta = crearMulta;
const obtenerMultas = async () => {
    return await database_1.AppDataSource.getRepository(Multas_1.Multa).find({
        relations: ["seguroCarro"],
    });
};
exports.obtenerMultas = obtenerMultas;
const actualizarMulta = async (id, datos) => {
    const repo = database_1.AppDataSource.getRepository(Multas_1.Multa);
    await repo.update(id, datos);
    return await repo.findOneBy({ id });
};
exports.actualizarMulta = actualizarMulta;
const eliminarMulta = async (id) => {
    return await database_1.AppDataSource.getRepository(Multas_1.Multa).delete(id);
};
exports.eliminarMulta = eliminarMulta;
// ---------------------- CRUD HISTORIAL MANTENIMIENTO ----------------------
const crearHistorialMantenimiento = async (datos) => {
    const repo = database_1.AppDataSource.getRepository(Historial_Mantenimiento_1.HistorialMantenimiento);
    const nuevo = repo.create(datos);
    return await repo.save(nuevo);
};
exports.crearHistorialMantenimiento = crearHistorialMantenimiento;
const obtenerHistorialesMantenimiento = async () => {
    return await database_1.AppDataSource.getRepository(Historial_Mantenimiento_1.HistorialMantenimiento).find({
        relations: ["seguroCarro"],
    });
};
exports.obtenerHistorialesMantenimiento = obtenerHistorialesMantenimiento;
const actualizarHistorialMantenimiento = async (id, datos) => {
    const repo = database_1.AppDataSource.getRepository(Historial_Mantenimiento_1.HistorialMantenimiento);
    await repo.update(id, datos);
    return await repo.findOneBy({ id });
};
exports.actualizarHistorialMantenimiento = actualizarHistorialMantenimiento;
const eliminarHistorialMantenimiento = async (id) => {
    return await database_1.AppDataSource.getRepository(Historial_Mantenimiento_1.HistorialMantenimiento).delete(id);
};
exports.eliminarHistorialMantenimiento = eliminarHistorialMantenimiento;
// ---------------------- CRUD HISTORIAL UBICACIÓN ----------------------
const crearHistorialUbicacion = async (datos) => {
    const repo = database_1.AppDataSource.getRepository(Historiol_Ubicacion_1.HistorialUbicacion);
    const nuevo = repo.create(datos);
    return await repo.save(nuevo);
};
exports.crearHistorialUbicacion = crearHistorialUbicacion;
const obtenerHistorialesUbicacion = async () => {
    return await database_1.AppDataSource.getRepository(Historiol_Ubicacion_1.HistorialUbicacion).find();
};
exports.obtenerHistorialesUbicacion = obtenerHistorialesUbicacion;
const actualizarHistorialUbicacion = async (id, datos) => {
    const repo = database_1.AppDataSource.getRepository(Historiol_Ubicacion_1.HistorialUbicacion);
    await repo.update(id, datos);
    return await repo.findOneBy({ id });
};
exports.actualizarHistorialUbicacion = actualizarHistorialUbicacion;
const eliminarHistorialUbicacion = async (id) => {
    return await database_1.AppDataSource.getRepository(Historiol_Ubicacion_1.HistorialUbicacion).delete(id);
};
exports.eliminarHistorialUbicacion = eliminarHistorialUbicacion;
