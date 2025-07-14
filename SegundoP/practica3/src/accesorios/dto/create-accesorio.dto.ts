import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateAccesorioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsBoolean()
  disponible: boolean;
}
