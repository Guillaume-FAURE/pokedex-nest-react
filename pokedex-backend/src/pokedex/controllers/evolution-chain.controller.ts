import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EvolutionChainService } from '../services/evolution-chain.service';

@Controller('evolution-chain')
export class EvolutionChainController {
    constructor(private evolutionChainService: EvolutionChainService) {}
    @Get(':id')
    getPokemon(@Param('id', ParseIntPipe) id: number) {
        return this.evolutionChainService.findEvolutionChain(id);
    }
}
