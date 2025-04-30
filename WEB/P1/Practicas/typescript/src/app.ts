
import { systemName, totalLocations, location1, addLocation } from "./Historial_Ubicacion/Historial_Ubicacion";
import { maintenanceSystemName, totalMaintenanceRecords, record1, addRecord } from "./HistorialdeMantenimiento/HistorialdeMantenimento";
import { insuranceSystemName, totalPolicies, policy1, addPolicy } from "./SegurodeMoto/Seguro_Moto";

console.log("=== Tracking System ===");
console.log(`Nombre del sistema: ${systemName}`);
console.log(`Ubicaciones registradas: ${totalLocations}`);
console.log("Primera ubicación:", location1);
const newLocation = addLocation(2, -2.171234, -79.924000, "2025-04-30T12:00:00Z", 102);
console.log("Nueva ubicación agregada:", newLocation);

console.log("\n=== Sistema de Mantenimiento ===");
console.log(`Nombre del sistema: ${maintenanceSystemName}`);
console.log(`Registros de mantenimiento: ${totalMaintenanceRecords}`);
console.log("Primer registro:", record1);
const newRecord = addRecord(2, "EQ-002", "Revisión general", "2025-04-29", "María Fernández");
console.log("Nuevo registro agregado:", newRecord);

console.log("\n=== Sistema de Seguro de Motos ===");
console.log(`Nombre del sistema: ${insuranceSystemName}`);
console.log(`Pólizas registradas: ${totalPolicies}`);
console.log("Primera póliza:", policy1);
const newPolicy = addPolicy(2, "Luisa Herrera", "XYZ-5678", "Quito Seguros", "2026-01-15");
console.log("Nueva póliza agregada:", newPolicy);
