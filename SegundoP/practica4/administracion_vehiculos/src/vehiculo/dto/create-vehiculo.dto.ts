// src/modules/vehiculos/dto/vehiculo.dto.ts
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsNumber()
  @IsNotEmpty()
  año: number;

  @IsNumber()
  @IsNotEmpty()
  tipo_id: number;

  @IsString()
  @IsNotEmpty()
  estado: string;
}

export class UpdateVehiculoDto {
  @IsString()
  placa?: string;

  @IsString()
  marca?: string;

  @IsString()
  modelo?: string;

  @IsNumber()
  año?: number;

  @IsNumber()
  tipo_id?: number;

  @IsString()
  estado?: string;
}