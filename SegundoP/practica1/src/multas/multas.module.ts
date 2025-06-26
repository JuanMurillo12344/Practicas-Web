import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MultasService } from './multas.service';
import { MultasController } from './multas.controller';
import { Multa } from './entities/multa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Multa])],
  controllers: [MultasController],
  providers: [MultasService],
})
export class MultasModule {}
