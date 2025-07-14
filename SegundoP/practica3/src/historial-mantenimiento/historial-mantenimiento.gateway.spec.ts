import { Test, TestingModule } from '@nestjs/testing';
import { HistorialMantenimientoGateway } from './historial-mantenimiento.gateway';
import { HistorialMantenimientoService } from './historial-mantenimiento.service';

describe('HistorialMantenimientoGateway', () => {
  let gateway: HistorialMantenimientoGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialMantenimientoGateway, HistorialMantenimientoService],
    }).compile();

    gateway = module.get<HistorialMantenimientoGateway>(HistorialMantenimientoGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
