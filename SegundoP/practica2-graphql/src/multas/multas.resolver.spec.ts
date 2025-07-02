import { Test, TestingModule } from '@nestjs/testing';
import { MultasResolver } from './multas.resolver';
import { MultasService } from './multas.service';

describe('MultasResolver', () => {
  let resolver: MultasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultasResolver, MultasService],
    }).compile();

    resolver = module.get<MultasResolver>(MultasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
