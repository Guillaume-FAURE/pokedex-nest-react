import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LocationService } from '../services/location.service';

@Controller('location')
export class LocationController {
    constructor(private locationService: LocationService) {}
    @Get(':id')
    getPokemon(@Param('id', ParseIntPipe) id: number) {
        return this.locationService.findLocation(id);
    }
}
