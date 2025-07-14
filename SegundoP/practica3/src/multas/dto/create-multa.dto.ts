import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMultaDto {
  @IsNumber()
  vehiculoId: number;

  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  motivo: string;

  @IsNumber()
  valor: number;

  @IsBoolean()
  pagada: boolean;
}
