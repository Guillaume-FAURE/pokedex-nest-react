import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class MovesService {
    constructor(private httpService: HttpService) {}

    async findMove(id: number) {
        const data = this.httpService
            .get(`https://pokeapi.co/api/v2/move/${id}/`)
            .pipe(
                map((response) => response.data),
                map((data) => ({
                    id: data.id,
                    name: data.name,
                    accuracy: data.accuracy,
                    class: data.damage_class.name,
                    power: data.power,
                    pp: data.pp,
                    priority: data.priority,
                    type: data.type.name,
                })),
            );
        return data;
    }
}
