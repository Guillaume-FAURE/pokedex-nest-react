import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class LocationAreaEnconterService {
    constructor(private httpService: HttpService) {}

    async findLocationEnconters(id: number) {
        const data = this.httpService
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
            .pipe(
                map((response) => response.data),
                map((data) => getLocationEnconters(data)),
            );
        return data;
    }
}
function getLocationEnconters(data) {
    const locationArea = [];
    for (let i = 0; i < data.length; i++) {
        locationArea.push({
            name: data[i].location_area.name,
            version: data[i].version_details[0].version.name,
        });
    }
    return locationArea;
}
