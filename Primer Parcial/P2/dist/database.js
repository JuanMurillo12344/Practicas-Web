"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
exports.iniciar = iniciar;
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
const Seguro_Carro_1 = require("./entities/Seguro_Carro");
const Accesorios_1 = require("./entities/Accesorios");
const Multas_1 = require("./entities/Multas");
const Historial_Mantenimiento_1 = require("./entities/Historial_Mantenimiento");
const Historiol_Ubicacion_1 = require("./entities/Historiol_Ubicacion");
dotenv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true, // Usa false en producción y aplica migraciones
    logging: false,
    entities: [
        Seguro_Carro_1.SeguroCarro,
        Accesorios_1.Accesorio,
        Multas_1.Multa,
        Historial_Mantenimiento_1.HistorialMantenimiento,
        Historiol_Ubicacion_1.HistorialUbicacion,
    ],
    ssl: process.env.DATABASE_URL?.includes("neon.tech")
        ? { rejectUnauthorized: false }
        : undefined,
});
async function iniciar() {
    try {
        await exports.AppDataSource.initialize();
        console.log("Base de datos conectada correctamente.");
    }
    catch (error) {
        console.error("Error al conectar la base de datos:", error);
    }
}
