import { Test, TestingModule } from '@nestjs/testing';
import { EvolutionChainController } from './evolution-chain.controller';

describe('EvolutionChainController', () => {
  let controller: EvolutionChainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvolutionChainController],
    }).compile();

    controller = module.get<EvolutionChainController>(EvolutionChainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
