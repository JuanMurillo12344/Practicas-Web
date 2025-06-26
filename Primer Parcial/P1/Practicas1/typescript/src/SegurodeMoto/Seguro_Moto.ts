export const insuranceSystemName: string = "MotoSeguro";
export let totalPolicies: number = 45;

export interface MotorcycleInsurance {
  policyId: number;
  ownerName: string;
  plateNumber: string;
  insuranceCompany: string;
  expirationDate: string;
}

export const policy1: MotorcycleInsurance = {
  policyId: 1,
  ownerName: "Andrés Molina",
  plateNumber: "ABC-1234",
  insuranceCompany: "Seguros Equinoccial",
  expirationDate: "2025-12-31"
};

export function addPolicy(policyId: number, ownerName: string, plateNumber: string, insuranceCompany: string, expirationDate: string): MotorcycleInsurance {
  return { policyId, ownerName, plateNumber, insuranceCompany, expirationDate };
}

