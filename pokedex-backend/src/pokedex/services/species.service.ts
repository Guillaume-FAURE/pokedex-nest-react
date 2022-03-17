import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class SpeciesService {
    constructor(private httpService: HttpService) {}

    async findSpecies(id: number) {
        const data = this.httpService
            .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
            .pipe(
                map((response) => response.data),
                map((data) => ({
                    flavorText: getFlavorText(data.flavor_text_entries),
                    evolutionChain: getEvolutionChainId(
                        data.evolution_chain.url,
                    ),
                    genera: getGenera(data.genera),
                    originGeneration: data.generation.name,
                    habitat: () => {
                        data.habitat ? data.habitat.name : undefined;
                    },
                    shape: () => {
                        data.shape ? data.shape.name : undefined;
                    },
                    color: data.color.name,
                })),
            );
        return data;
    }
}
function getEvolutionChainId(evolutionChainUrl: string) {
    return evolutionChainUrl
        .slice(0, -1)
        .substring(evolutionChainUrl.slice(0, -1).lastIndexOf('/') + 1);
}

function getGenera(generaData) {
    for (let i = 0; i < generaData.length; i++) {
        if (generaData[generaData.length - i - 1].language.name === 'en') {
            return `${generaData[generaData.length - i - 1].genus}`;
        }
    }
}

function getFlavorText(flavorTextData) {
    for (let i = 0; i < flavorTextData.length; i++) {
        if (
            flavorTextData[flavorTextData.length - i - 1].version.name ===
                'shield' &&
            flavorTextData[flavorTextData.length - i - 1].language.name === 'en'
        ) {
            return `${
                flavorTextData[flavorTextData.length - i - 1].flavor_text
            }`;
        }
    }
}
