import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

@InputType()
export class CreateAccesorioInput {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  descripcion: string;

  @Field(() => Int)
  @IsInt({ message: 'El precio debe ser un número entero' })
  @Min(0, { message: 'El precio debe ser mayor o igual a 0' })
  precio: number;
}
