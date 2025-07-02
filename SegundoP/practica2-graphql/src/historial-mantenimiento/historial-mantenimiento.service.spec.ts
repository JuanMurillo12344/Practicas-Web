import { Test, TestingModule } from '@nestjs/testing';
import { HistorialMantenimientoService } from './historial-mantenimiento.service';

describe('HistorialMantenimientoService', () => {
  let service: HistorialMantenimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialMantenimientoService],
    }).compile();

    service = module.get<HistorialMantenimientoService>(HistorialMantenimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
