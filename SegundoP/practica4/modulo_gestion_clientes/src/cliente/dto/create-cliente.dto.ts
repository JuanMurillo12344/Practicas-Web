// src/modules/clientes/dto/cliente.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsString()
  @IsNotEmpty()
  cedula_pasaporte: string;

  @IsString()
  @IsNotEmpty()
  direccion: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;
}

export class UpdateClienteDto {
  @IsString()
  nombre?: string;

  @IsString()
  apellido?: string;

  @IsString()
  cedula_pasaporte?: string;

  @IsString()
  direccion?: string;

  @IsEmail()
  correo?: string;

  @IsString()
  telefono?: string;
}