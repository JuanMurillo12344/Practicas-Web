import { Module } from '@nestjs/common';
import { ClientesService } from './cliente.service';
import { ClientesMicroserviceController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ Cliente ]) ], // Add your entities here
  exports: [ TypeOrmModule ],
  controllers: [ClientesMicroserviceController],
  providers: [ClientesService],
})
export class ClienteModule {}
