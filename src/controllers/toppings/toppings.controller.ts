import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ToppingsDto } from '../../dto/toppings-dto.dto';
import { ToppingsService } from '../../services/toppings/toppings.service';


@Controller('Toppings')
export class ToppingsController {
    constructor(private readonly toppingsService: ToppingsService) { }

    @Post()
    async create(@Body() toppingsDto: ToppingsDto) {
        const res = this.toppingsService.create(toppingsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.toppingsService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() toppingsDto: ToppingsDto) {
        return this.toppingsService.update(id, toppingsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.toppingsService.delete(id);
    }
}