export const maintenanceSystemName: string = "Maintenance Tracker";
export let totalMaintenanceRecords: number = 75;

export interface MaintenanceRecord {
  id: number;
  equipmentId: string;
  description: string;
  date: string;
  technician: string;
}

export const record1: MaintenanceRecord = {
  id: 1,
  equipmentId: "EQ-001",
  description: "Cambio de aceite",
  date: "2025-04-15",
  technician: "Carlos López"
};

export function addRecord(id: number, equipmentId: string, description: string, date: string, technician: string): MaintenanceRecord {
  return { id, equipmentId, description, date, technician };
}

