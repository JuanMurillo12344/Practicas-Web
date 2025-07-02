import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateHistorialMantenimientoInput } from './create-historial-mantenimiento.input';

@InputType()
export class UpdateHistorialMantenimientoInput extends PartialType(CreateHistorialMantenimientoInput) {
  @Field(() => Int)
  id: number;
}
