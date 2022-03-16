import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PokemonService } from '../services/pokemon.service';

@Controller('pokemon')
export class PokemonController {
    constructor(private pokemonService: PokemonService) {}
    @Get(':id')
    getPokemon(@Param('id', ParseIntPipe) id: number) {
        return this.pokemonService.findPokemon(id);
    }
}
