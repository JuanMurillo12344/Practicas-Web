import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HistorialMantenimientoService } from './historial-mantenimiento.service';
import { HistorialMantenimiento } from './entities/historial-mantenimiento.entity';
import { CreateHistorialMantenimientoInput } from './dto/create-historial-mantenimiento.input';
import { UpdateHistorialMantenimientoInput } from './dto/update-historial-mantenimiento.input';
import { DeleteResponse } from '../common/delete-response.dto';

@Resolver(() => HistorialMantenimiento)
export class HistorialMantenimientoResolver {
  constructor(private readonly service: HistorialMantenimientoService) {}

  @Mutation(() => HistorialMantenimiento)
  createHistorialMantenimiento(@Args('createHistorialMantenimientoInput') input: CreateHistorialMantenimientoInput) {
    return this.service.create(input);
  }

  @Query(() => [HistorialMantenimiento], { name: 'historialesMantenimiento' })
  findAll() {
    return this.service.findAll();
  }

  @Query(() => HistorialMantenimiento, { name: 'historialMantenimiento' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => HistorialMantenimiento)
  updateHistorialMantenimiento(@Args('updateHistorialMantenimientoInput') input: UpdateHistorialMantenimientoInput) {
    return this.service.update(input.id, input);
  }

  @Mutation(() => DeleteResponse)
  async removeHistorialMantenimiento(@Args('id', { type: () => Int }) id: number): Promise<DeleteResponse> {
    await this.service.remove(id);
    return { message: `Historial de mantenimiento con id ${id} eliminado correctamente` };
  }
}