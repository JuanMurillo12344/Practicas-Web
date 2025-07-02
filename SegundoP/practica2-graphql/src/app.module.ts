import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AccesorioModule } from './accesorios/accesorios.module';
import { HistorialMantenimientoModule } from './historial-mantenimiento/historial-mantenimiento.module';
import { MultaModule } from './multas/multas.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      autoLoadEntities: true,
    }),
    AccesorioModule,
    HistorialMantenimientoModule,
    MultaModule,
  ],
})
export class AppModule {}
