import { Test, TestingModule } from '@nestjs/testing';
import { AccesoriosResolver } from './accesorios.resolver';
import { AccesoriosService } from './accesorios.service';

describe('AccesoriosResolver', () => {
  let resolver: AccesoriosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccesoriosResolver, AccesoriosService],
    }).compile();

    resolver = module.get<AccesoriosResolver>(AccesoriosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
