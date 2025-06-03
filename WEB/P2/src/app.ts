import "reflect-metadata";
import { iniciar } from "./database";
import {
    crearSeguro,
    crearAccesorio,
    crearMulta,
    crearHistorialMantenimiento,
    crearHistorialUbicacion,
    obtenerSeguros,
} from "./crud"; 

async function main() {
    await iniciar();

    // Crear un seguro de ejemplo
    const seguro = await crearSeguro({
    compania: "Seguros del Caribe",
    tipoCobertura: "Completa",
    costo: 2500.00,
    });

    console.log("✅ Seguro creado:", seguro);

    // Crear un accesorio
    const accesorio = await crearAccesorio({
    nombre: "GPS Tracker",
    descripcion: "Dispositivo de rastreo por GPS",
    costoAdicional: 50.00,  // Proporciona un valor para costoAdicional
});


    console.log("✅ Accesorio creado:", accesorio);

    // Crear una multa asociada al seguro
    const multa = await crearMulta({
        motivo: "Exceso de velocidad",
        monto: 300,
        fecha: new Date(),
        seguroCarro: seguro,
    });

    console.log("✅ Multa creada:", multa);

    // Crear historial de mantenimiento
    const mantenimiento = await crearHistorialMantenimiento({
        descripcion: "Cambio de aceite",
        fecha: new Date(),
        seguroCarro: seguro,
    });

    console.log("✅ Mantenimiento registrado:", mantenimiento);

    // Crear historial de ubicación
    const ubicacion = await crearHistorialUbicacion({
        latitud: "10.4040",
        longitud: "-75.5020",
        Fecha: new Date(),
    });

    console.log("✅ Ubicación registrada:", ubicacion);

    // Ver seguros creados
    const seguros = await obtenerSeguros();
    console.log("🔍 Lista de seguros:", seguros);
}

main();
