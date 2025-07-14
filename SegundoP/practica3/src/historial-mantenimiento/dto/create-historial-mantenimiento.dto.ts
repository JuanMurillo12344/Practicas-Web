import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHistorialDto {
  @IsNumber()
  vehiculoId: number;

  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  costo: number;
}
