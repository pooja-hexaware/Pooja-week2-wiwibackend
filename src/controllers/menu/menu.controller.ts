import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MenuDto } from '../../dto/menu-dto.dto';
import { MenuService } from '../../services/menu/menu.service';


@Controller('Menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) { }

    @Post()
    async create(@Body() menuDto: MenuDto) {
        const res = this.menuService.create(menuDto);
        return res;
    }

    @Get("getAllMenuItems")
    async findAll() {
        return this.menuService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() menuDto: MenuDto) {
        return this.menuService.update(id, menuDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.menuService.delete(id);
    }
}