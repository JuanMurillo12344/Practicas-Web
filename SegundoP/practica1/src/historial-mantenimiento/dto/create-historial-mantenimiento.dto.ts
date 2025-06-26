import { IsString, IsNumber } from 'class-validator';

export class CreateHistorialMantenimientoDto {
  @IsString()
  vehiculoId: string;

  @IsString()
  fecha: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  costo: number;
}
