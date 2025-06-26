"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const database_1 = require("./database");
const crud_1 = require("./crud"); // Cambia a la ruta correcta si el archivo se llama distinto
async function main() {
    await (0, database_1.iniciar)();
    // Crear un seguro de ejemplo
    const seguro = await (0, crud_1.crearSeguro)({
        compania: "Seguros del Caribe",
        tipoCobertura: "Completa",
        costo: 2500.00,
    });
    console.log("✅ Seguro creado:", seguro);
    // Crear un accesorio
    const accesorio = await (0, crud_1.crearAccesorio)({
        nombre: "GPS Tracker",
        descripcion: "Dispositivo de rastreo por GPS",
        costoAdicional: 50.00, // Proporciona un valor para costoAdicional
    });
    console.log("✅ Accesorio creado:", accesorio);
    // Crear una multa asociada al seguro
    const multa = await (0, crud_1.crearMulta)({
        motivo: "Exceso de velocidad",
        monto: 300,
        fecha: new Date(),
        seguroCarro: seguro,
    });
    console.log("✅ Multa creada:", multa);
    // Crear historial de mantenimiento
    const mantenimiento = await (0, crud_1.crearHistorialMantenimiento)({
        descripcion: "Cambio de aceite",
        fecha: new Date(),
        seguroCarro: seguro,
    });
    console.log("✅ Mantenimiento registrado:", mantenimiento);
    // Crear historial de ubicación
    const ubicacion = await (0, crud_1.crearHistorialUbicacion)({
        latitud: "10.4040",
        longitud: "-75.5020",
        Fecha: new Date(),
    });
    console.log("✅ Ubicación registrada:", ubicacion);
    // Ver seguros creados
    const seguros = await (0, crud_1.obtenerSeguros)();
    console.log("🔍 Lista de seguros:", seguros);
}
main();
