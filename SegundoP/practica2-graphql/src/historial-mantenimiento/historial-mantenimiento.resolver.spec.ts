import { Test, TestingModule } from '@nestjs/testing';
import { HistorialMantenimientoResolver } from './historial-mantenimiento.resolver';
import { HistorialMantenimientoService } from './historial-mantenimiento.service';

describe('HistorialMantenimientoResolver', () => {
  let resolver: HistorialMantenimientoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialMantenimientoResolver, HistorialMantenimientoService],
    }).compile();

    resolver = module.get<HistorialMantenimientoResolver>(HistorialMantenimientoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
