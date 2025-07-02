import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MultaService } from './multas.service';
import { Multa } from './entities/multa.entity';
import { CreateMultaInput } from './dto/create-multa.input';
import { UpdateMultaInput } from './dto/update-multa.input';
import { DeleteResponse } from '../common/delete-response.dto';

@Resolver(() => Multa)
export class MultaResolver {
  constructor(private readonly multaService: MultaService) {}

  @Mutation(() => Multa)
  createMulta(@Args('createMultaInput') input: CreateMultaInput) {
    return this.multaService.create(input);
  }

  @Query(() => [Multa], { name: 'multas' })
  findAll() {
    return this.multaService.findAll();
  }

  @Query(() => Multa, { name: 'multa' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.multaService.findOne(id);
  }

  @Mutation(() => Multa)
  updateMulta(@Args('updateMultaInput') input: UpdateMultaInput) {
    return this.multaService.update(input.id, input);
  }

  @Mutation(() => DeleteResponse)
  async removeMulta(@Args('id', { type: () => Int }) id: number): Promise<DeleteResponse> {
    await this.multaService.remove(id);
    return { message: `Multa con id ${id} eliminada correctamente` };
  }}