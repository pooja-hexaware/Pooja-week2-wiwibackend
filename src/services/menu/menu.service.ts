import { Injectable } from '@nestjs/common';
import { MenuRepo } from '../../repository/menu.repo';
import { Menu } from '../../schemas/menu.schema';

@Injectable()
export class MenuService {
    constructor(
        private readonly menuRepo: MenuRepo
    ) { }

    async findAll(): Promise<Menu[]> {
        return this.menuRepo.findAll();
    }

    async create(data): Promise<Menu> {
        data.createddate = new Date();
        return this.menuRepo.create(data);
    }

    async update(menuId, data): Promise<Menu> {
        return this.menuRepo.update(menuId, data);
    }

    async delete(menuId): Promise<Menu> {
        return this.menuRepo.delete(menuId);
    }
}