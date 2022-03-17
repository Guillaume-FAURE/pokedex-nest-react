import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class EvolutionChainService {
    constructor(private httpService: HttpService) {}

    async findEvolutionChain(id: number) {
        const data = this.httpService
            .get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
            .pipe(
                map((response) => response.data),
                map((data) => ({
                    firstForm: getFirstForm(data.chain),
                    secondForm: getSecondForm(data.chain.evolves_to),
                    thirdForm: getThirdForm(data.chain.evolves_to),
                })),
            );
        return data;
    }
}
function getFirstForm(firstFormData) {
    return {
        name: firstFormData.species.name,
        id: firstFormData.species.url
            .slice(0, -1)
            .substring(
                firstFormData.species.url.slice(0, -1).lastIndexOf('/') + 1,
            ),
    };
}
function getSecondForm(secondFormData) {
    if (secondFormData[0] === undefined) {
        return;
    }
    const secondForm = [];
    for (let i = 0; i < secondFormData.length; i++) {
        secondForm.push({
            name: secondFormData[i].species.name,
            levelOfEvolution: secondFormData[i].evolution_details[0].min_level,
            id: secondFormData[i].species.url
                .slice(0, -1)
                .substring(
                    secondFormData[i].species.url
                        .slice(0, -1)
                        .lastIndexOf('/') + 1,
                ),
        });
    }
    return secondForm;
}
function getThirdForm(thirdFormData) {
    if (!thirdFormData[0]) {
        return;
    }
    if (!thirdFormData[0].evolves_to[0]) {
        return;
    }
    const thirdForm = [];
    for (let i = 0; i < thirdFormData.length; i++) {
        thirdForm.push({
            name: thirdFormData[0].evolves_to[i].species.name,
            levelOfEvolution:
                thirdFormData[0].evolves_to[i].evolution_details[0].min_level,
            id: thirdFormData[0].evolves_to[i].species.url
                .slice(0, -1)
                .substring(
                    thirdFormData[0].evolves_to[i].species.url
                        .slice(0, -1)
                        .lastIndexOf('/') + 1,
                ),
        });
    }
    return thirdForm;
}
