"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.record1 = exports.totalMaintenanceRecords = exports.maintenanceSystemName = void 0;
exports.addRecord = addRecord;
// /src/maintenance/maintenanceSystem.ts
exports.maintenanceSystemName = "Maintenance Tracker";
exports.totalMaintenanceRecords = 75;
exports.record1 = {
    id: 1,
    equipmentId: "EQ-001",
    description: "Cambio de aceite",
    date: "2025-04-15",
    technician: "Carlos López"
};
// Agrega el resto de las funciones y objetos para maintenance
function addRecord(id, equipmentId, description, date, technician) {
    return { id, equipmentId, description, date, technician };
}
// Resto de funciones...
//# sourceMappingURL=HistorialdeMantenimento.js.map