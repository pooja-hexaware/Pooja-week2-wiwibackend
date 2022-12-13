import { Injectable } from '@nestjs/common';
import { ToppingsRepo } from '../../repository/toppings.repo';
import { Toppings } from '../../schemas/toppings.schema';

@Injectable()
export class ToppingsService {
    constructor(
        private readonly toppingsRepo: ToppingsRepo
    ) { }

    async findAll(): Promise<Toppings[]> {
        return this.toppingsRepo.findAll();
    }

    async create(data): Promise<Toppings> {
        data.createddate = new Date();
        return this.toppingsRepo.create(data);
    }

    async update(toppingsId, data): Promise<Toppings> {
        return this.toppingsRepo.update(toppingsId, data);
    }

    async delete(toppingsId): Promise<Toppings> {
        return this.toppingsRepo.delete(toppingsId);
    }
}