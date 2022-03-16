import { Test, TestingModule } from '@nestjs/testing';
import { LocationAreaEnconterService } from './location-area-enconter.service';

describe('LocationAreaEnconterService', () => {
    let service: LocationAreaEnconterService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [LocationAreaEnconterService],
        }).compile();

        service = module.get<LocationAreaEnconterService>(
            LocationAreaEnconterService,
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
