import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SpeciesService } from '../services/species.service';

@Controller('species')
export class SpeciesController {
    constructor(private speciesService: SpeciesService) {}
    @Get(':id')
    getPokemon(@Param('id', ParseIntPipe) id: number) {
        return this.speciesService.findSpecies(id);
    }
}
