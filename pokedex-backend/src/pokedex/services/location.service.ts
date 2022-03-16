import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class LocationService {
    constructor(private httpService: HttpService) {}

    async findLocation(id: number) {
        const data = this.httpService
            .get(`https://pokeapi.co/api/v2/location/${id}/`)
            .pipe(
                map((response) => response.data),
                map((data) => ({
                    fullData: data,
                })),
            );
        return data;
    }
}
