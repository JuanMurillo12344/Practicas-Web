"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguroCarro = void 0;
const typeorm_1 = require("typeorm");
const Historial_Mantenimiento_1 = require("./Historial_Mantenimiento");
const Multas_1 = require("./Multas");
let SeguroCarro = class SeguroCarro {
};
exports.SeguroCarro = SeguroCarro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SeguroCarro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeguroCarro.prototype, "compania", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeguroCarro.prototype, "tipoCobertura", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], SeguroCarro.prototype, "costo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Historial_Mantenimiento_1.HistorialMantenimiento, (hm) => hm.seguroCarro),
    __metadata("design:type", Array)
], SeguroCarro.prototype, "historialesMantenimiento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Multas_1.Multa, (multa) => multa.seguroCarro),
    __metadata("design:type", Array)
], SeguroCarro.prototype, "multas", void 0);
exports.SeguroCarro = SeguroCarro = __decorate([
    (0, typeorm_1.Entity)()
], SeguroCarro);
