import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accesorio } from './entities/accesorio.entity';
import { AccesorioService } from './accesorios.service';
import { AccesorioResolver } from './accesorios.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Accesorio])],
  providers: [AccesorioService, AccesorioResolver],
})
export class AccesorioModule {}