import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class DeleteResponse {
  @Field()
  message: string;
}
