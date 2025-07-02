import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt } from 'class-validator';

@InputType()
export class CreateMultaInput {
  @Field()
  @IsString()
  motivo: string;

  @Field(() => Int)
  @IsInt()
  valor: number;

  @Field()
  @IsString()
  fecha: string;
}
