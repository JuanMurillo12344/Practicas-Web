import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccesorioService } from './accesorios.service';
import { Accesorio } from './entities/accesorio.entity';
import { CreateAccesorioInput } from './dto/create-accesorio.input';
import { UpdateAccesorioInput } from './dto/update-accesorio.input';

@Resolver(() => Accesorio)
export class AccesorioResolver {
  constructor(private readonly accesorioService: AccesorioService) {}

  @Mutation(() => Accesorio)
  createAccesorio(@Args('createAccesorioInput') input: CreateAccesorioInput) {
    return this.accesorioService.create(input);
  }

  @Query(() => [Accesorio], { name: 'accesorios' })
  findAll() {
    return this.accesorioService.findAll();
  }

  @Query(() => Accesorio, { name: 'accesorio' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.accesorioService.findOne(id);
  }

  @Mutation(() => Accesorio)
  updateAccesorio(@Args('updateAccesorioInput') input: UpdateAccesorioInput) {
    return this.accesorioService.update(input.id, input);
  }

  @Mutation(() => Accesorio)
  removeAccesorio(@Args('id', { type: () => Int }) id: number) {
    return this.accesorioService.remove(id);
  }
}