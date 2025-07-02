import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateAccesorioInput } from './create-accesorio.input';

@InputType()
export class UpdateAccesorioInput extends PartialType(CreateAccesorioInput) {
  @Field(() => Int)
  id: number;
}
