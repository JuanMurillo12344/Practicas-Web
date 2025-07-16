// src/modules/administracion/dto/empleado.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  cargo: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;
}

export class UpdateEmpleadoDto {
  @IsString()
  nombre?: string;

  @IsString()
  cargo?: string;

  @IsEmail()
  correo?: string;

  @IsString()
  telefono?: string;
}