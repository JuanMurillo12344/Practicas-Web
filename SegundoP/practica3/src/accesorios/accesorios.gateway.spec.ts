import { Test, TestingModule } from '@nestjs/testing';
import { AccesoriosGateway } from './accesorios.gateway';
import { AccesoriosService } from './accesorios.service';

describe('AccesoriosGateway', () => {
  let gateway: AccesoriosGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccesoriosGateway, AccesoriosService],
    }).compile();

    gateway = module.get<AccesoriosGateway>(AccesoriosGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
