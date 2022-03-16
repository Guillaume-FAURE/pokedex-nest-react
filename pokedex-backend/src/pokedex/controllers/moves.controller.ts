import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MovesService } from '../services/moves.service';

@Controller('moves')
export class MovesController {
    constructor(private moveService: MovesService) {}
    @Get(':id')
    getPokemon(@Param('id', ParseIntPipe) id: number) {
        return this.moveService.findMove(id);
    }
}
