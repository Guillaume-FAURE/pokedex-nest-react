import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class PokemonService {
    constructor(private httpService: HttpService) {}

    async findPokemon(id: number) {
        const data = this.httpService
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .pipe(
                map((response) => response.data),
                map(async (data) => ({
                    id: data.id,
                    name: data.name,
                    fullSprite:
                        data.sprites.other['official-artwork'].front_default,
                    littleSprite: data.sprites.front_default,
                    height: data.height,
                    weight: data.weight,
                    types: getTypes(data.types),
                    abilities: getAbilities(data.abilities),
                    moves: getMoves(data.moves),
                    species: getSpeciesId(data.species.url),
                    stats: getStats(data.stats),
                    baseExperience: data.base_experience,
                    heldItems: data.heldItems,
                    locationArea: data.location_area_encounters,
                })),
            );
        return data;
    }
}
function getStats(statsData: Array<any>) {
    return {
        hp: statsData[0].base_stat,
        attack: statsData[1].base_stat,
        defense: statsData[2].base_stat,
        specialAttack: statsData[3].base_stat,
        specialDefense: statsData[4].base_stat,
        speed: statsData[5].base_stat,
        totalStat: statsData.reduce(
            (total, currentValue) => (total = total + currentValue.base_stat),
            0,
        ),
    };
}
function getSpeciesId(speciesUrl: string) {
    return speciesUrl
        .slice(0, -1)
        .substring(speciesUrl.slice(0, -1).lastIndexOf('/') + 1);
}
function getAbilities(abilitiesData) {
    const abilities = [];
    for (let i = 0; i < abilitiesData.length; i++) {
        abilities.push({
            name: abilitiesData[i].ability.name,
            description: abilitiesData[i].ability.url,
        });
    }
    return abilities;
}

function getMoves(movesData: Array<any>) {
    const moves = [];
    for (let i = 0; i < movesData.length; i++) {
        moves.push({
            id: movesData[i].move.url
                .slice(0, -1)
                .substring(
                    movesData[i].move.url.slice(0, -1).lastIndexOf('/') + 1,
                ),
            learning: verificationLevelVersion(
                movesData[i].version_group_details,
            ),
        });
    }
    return moves;
}

function verificationLevelVersion(moveDataVersionsGroups: Array<any>) {
    for (let i = 0; i < moveDataVersionsGroups.length; i++) {
        if (
            moveDataVersionsGroups[moveDataVersionsGroups.length - i - 1]
                .version_group.name === 'sword-shield'
        ) {
            if (
                moveDataVersionsGroups[moveDataVersionsGroups.length - i - 1]
                    .level_learned_at !== 0
            ) {
                return `level ${
                    moveDataVersionsGroups[
                        moveDataVersionsGroups.length - i - 1
                    ].level_learned_at
                }`;
            }
            return `${
                moveDataVersionsGroups[moveDataVersionsGroups.length - i - 1]
                    .move_learn_method.name
            }`;
        }
    }
    return 'unknown';
}

function getTypes(typesData: Array<any>) {
    const types = [];
    for (let i = 0; i < typesData.length; i++) {
        types.push({
            name: typesData[i].type.name,
            description: typesData[i].type.url,
        });
    }
    return types;
}
