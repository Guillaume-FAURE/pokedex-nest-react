import { Test, TestingModule } from '@nestjs/testing';
import { EvolutionChainService } from './evolution-chain.service';

describe('EvolutionChainService', () => {
    let service: EvolutionChainService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EvolutionChainService],
        }).compile();

        service = module.get<EvolutionChainService>(EvolutionChainService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
