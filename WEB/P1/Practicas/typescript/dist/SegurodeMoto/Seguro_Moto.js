"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.policy1 = exports.totalPolicies = exports.insuranceSystemName = void 0;
exports.addPolicy = addPolicy;
// /src/insurance/motorcycleInsurance.ts
exports.insuranceSystemName = "MotoSeguro";
exports.totalPolicies = 45;
exports.policy1 = {
    policyId: 1,
    ownerName: "Andrés Molina",
    plateNumber: "ABC-1234",
    insuranceCompany: "Seguros Equinoccial",
    expirationDate: "2025-12-31"
};
// Agrega el resto de las funciones y objetos para motorcycle insurance
function addPolicy(policyId, ownerName, plateNumber, insuranceCompany, expirationDate) {
    return { policyId, ownerName, plateNumber, insuranceCompany, expirationDate };
}
// Resto de funciones...
//# sourceMappingURL=Seguro_Moto.js.map