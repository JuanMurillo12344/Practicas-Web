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
exports.Multa = void 0;
const typeorm_1 = require("typeorm");
const Seguro_Carro_1 = require("./Seguro_Carro");
let Multa = class Multa {
};
exports.Multa = Multa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Multa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Multa.prototype, "motivo", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Multa.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Multa.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Seguro_Carro_1.SeguroCarro, (seguro) => seguro.multas),
    __metadata("design:type", Seguro_Carro_1.SeguroCarro)
], Multa.prototype, "seguroCarro", void 0);
exports.Multa = Multa = __decorate([
    (0, typeorm_1.Entity)()
], Multa);
