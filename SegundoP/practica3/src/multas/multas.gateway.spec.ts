import { Test, TestingModule } from '@nestjs/testing';
import { MultasGateway } from './multas.gateway';
import { MultasService } from './multas.service';

describe('MultasGateway', () => {
  let gateway: MultasGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultasGateway, MultasService],
    }).compile();

    gateway = module.get<MultasGateway>(MultasGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
