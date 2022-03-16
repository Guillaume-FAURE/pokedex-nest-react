import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LocationAreaEnconterService } from '../services/location-area-enconter.service';

@Controller('location-area-encounter')
export class LocationAreaEnconterController {
    constructor(
        private locationAreaEnconterService: LocationAreaEnconterService,
    ) {}
    @Get(':id')
    getPokemon(@Param('id', ParseIntPipe) id: number) {
        return this.locationAreaEnconterService.findLocationEnconters(id);
    }
}
