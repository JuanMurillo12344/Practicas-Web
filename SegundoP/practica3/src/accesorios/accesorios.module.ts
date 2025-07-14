import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accesorio } from './entities/accesorio.entity';
import { AccesoriosService } from './accesorios.service';
import { AccesoriosGateway } from './accesorios.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Accesorio])],
  providers: [AccesoriosService, AccesoriosGateway],
})
export class AccesoriosModule {}
