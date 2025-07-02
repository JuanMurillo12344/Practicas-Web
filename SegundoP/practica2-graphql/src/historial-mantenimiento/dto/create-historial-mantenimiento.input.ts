import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt } from 'class-validator';

@InputType()
export class CreateHistorialMantenimientoInput {
  @Field()
  @IsString()
  descripcion: string;

  @Field()
  @IsString()
  fecha: string;

  @Field(() => Int)
  @IsInt()
  costo: number;
}
