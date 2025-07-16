import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { Vehiculo } from './vehiculo/entities/vehiculo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'base1',
      entities: [Vehiculo],
      synchronize: true,
    }),

    VehiculoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
