import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccesoriosModule } from './accesorios/accesorios.module';
import { HistorialMantenimientoModule } from './historial-mantenimiento/historial-mantenimiento.module';
import { MultasModule } from './multas/multas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    AccesoriosModule,
    HistorialMantenimientoModule,
    MultasModule,
  ],
})
export class AppModule {}