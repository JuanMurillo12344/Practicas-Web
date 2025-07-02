import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateMultaInput } from './create-multa.input';

@InputType()
export class UpdateMultaInput extends PartialType(CreateMultaInput) {
  @Field(() => Int)
  id: number;
}
