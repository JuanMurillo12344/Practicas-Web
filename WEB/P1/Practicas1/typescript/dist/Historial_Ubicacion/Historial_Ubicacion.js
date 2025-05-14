"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.location1 = exports.totalLocations = exports.systemName = void 0;
exports.addLocation = addLocation;
// /src/tracking/trackingSystem.ts
exports.systemName = "Tracking System";
exports.totalLocations = 150;
exports.location1 = {
    id: 1,
    latitude: -2.170998,
    longitude: -79.922359,
    timestamp: "2025-04-30T10:00:00Z",
    userId: 101
};
// Agrega el resto de las funciones y objetos para tracking
function addLocation(id, latitude, longitude, timestamp, userId) {
    return { id, latitude, longitude, timestamp, userId };
}
// Resto de funciones...
//# sourceMappingURL=Historial_Ubicacion.js.map