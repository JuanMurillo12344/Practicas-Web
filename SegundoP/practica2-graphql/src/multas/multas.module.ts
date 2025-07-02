import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Multa } from './entities/multa.entity';
import { MultaService } from './multas.service';
import { MultaResolver } from './multas.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Multa])],
  providers: [MultaService, MultaResolver],
})
export class MultaModule {}