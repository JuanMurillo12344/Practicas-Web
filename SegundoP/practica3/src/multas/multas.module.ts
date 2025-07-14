import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Multa } from './entities/multa.entity';
import { MultasService } from './multas.service';
import { MultasGateway } from './multas.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Multa])],
  providers: [MultasService, MultasGateway],
})
export class MultasModule {}
