"use strict";
// /src/app.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Historial_Ubicacion_1 = require("./Historial_Ubicacion/Historial_Ubicacion");
const HistorialdeMantenimento_1 = require("./HistorialdeMantenimiento/HistorialdeMantenimento");
const Seguro_Moto_1 = require("./SegurodeMoto/Seguro_Moto");
console.log("=== Tracking System ===");
console.log(`Nombre del sistema: ${Historial_Ubicacion_1.systemName}`);
console.log(`Ubicaciones registradas: ${Historial_Ubicacion_1.totalLocations}`);
console.log("Primera ubicación:", Historial_Ubicacion_1.location1);
const newLocation = (0, Historial_Ubicacion_1.addLocation)(2, -2.171234, -79.924000, "2025-04-30T12:00:00Z", 102);
console.log("Nueva ubicación agregada:", newLocation);
console.log("\n=== Sistema de Mantenimiento ===");
console.log(`Nombre del sistema: ${HistorialdeMantenimento_1.maintenanceSystemName}`);
console.log(`Registros de mantenimiento: ${HistorialdeMantenimento_1.totalMaintenanceRecords}`);
console.log("Primer registro:", HistorialdeMantenimento_1.record1);
const newRecord = (0, HistorialdeMantenimento_1.addRecord)(2, "EQ-002", "Revisión general", "2025-04-29", "María Fernández");
console.log("Nuevo registro agregado:", newRecord);
console.log("\n=== Sistema de Seguro de Motos ===");
console.log(`Nombre del sistema: ${Seguro_Moto_1.insuranceSystemName}`);
console.log(`Pólizas registradas: ${Seguro_Moto_1.totalPolicies}`);
console.log("Primera póliza:", Seguro_Moto_1.policy1);
const newPolicy = (0, Seguro_Moto_1.addPolicy)(2, "Luisa Herrera", "XYZ-5678", "Quito Seguros", "2026-01-15");
console.log("Nueva póliza agregada:", newPolicy);
//# sourceMappingURL=app.js.map