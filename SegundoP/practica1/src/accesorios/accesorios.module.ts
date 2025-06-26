import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccesoriosService } from './accesorios.service';
import { AccesoriosController } from './accesorios.controller';
import { Accesorio } from './entities/accesorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accesorio])],
  controllers: [AccesoriosController],
  providers: [AccesoriosService],
})
export class AccesoriosModule {}
