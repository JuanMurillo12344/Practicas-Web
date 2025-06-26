import { IsString, IsNumber } from 'class-validator';

export class CreateMultaDto {
  @IsString()
  conductor: string;

  @IsString()
  tipo: string;

  @IsString()
  fecha: string;

  @IsNumber()
  monto: number;
}
