import { Test, TestingModule } from '@nestjs/testing';
import { LocationAreaEnconterController } from './location-area-enconter.controller';

describe('LocationAreaEnconterController', () => {
    let controller: LocationAreaEnconterController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LocationAreaEnconterController],
        }).compile();

        controller = module.get<LocationAreaEnconterController>(
            LocationAreaEnconterController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
