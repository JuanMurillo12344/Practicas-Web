import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateAccesorioDto {
  @IsString()
  nombre: string;

  @IsString()
  tipo: string;

  @IsNumber()
  precio: number;

  @IsBoolean()
  disponible: boolean;
}
