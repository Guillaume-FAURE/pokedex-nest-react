import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokemonService } from './services/pokemon.service';
import { PokemonController } from './controllers/pokemon.controller';
import { SpeciesService } from './services/species.service';
import { EvolutionChainService } from './services/evolution-chain.service';
import { SpeciesController } from './controllers/species.controller';
import { EvolutionChainController } from './controllers/evolution-chain.controller';
import { MovesService } from './services/moves.service';
import { LocationService } from './services/location.service';
import { LocationAreaEnconterService } from './services/location-area-enconter.service';
import { MovesController } from './controllers/moves.controller';
import { LocationController } from './controllers/location.controller';
import { LocationAreaEnconterController } from './controllers/location-area-enconter.controller';

@Module({
    imports: [HttpModule],
    providers: [
        PokemonService,
        SpeciesService,
        EvolutionChainService,
        MovesService,
        LocationService,
        LocationAreaEnconterService,
    ],
    controllers: [
        PokemonController,
        SpeciesController,
        EvolutionChainController,
        MovesController,
        LocationController,
        LocationAreaEnconterController,
    ],
})
export class PokedexModule {}
