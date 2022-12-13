import { Injectable } from '@nestjs/common';
import { OrderRepo } from '../../repository/order.repo';
import { Order } from '../../schemas/order.schema';

@Injectable()
export class OrderService {
    constructor(
        private readonly orderRepo: OrderRepo
    ) { }

    async findAll(): Promise<Order[]> {
        return this.orderRepo.findAll();
    }

    async create(data): Promise<Order> {
        data.createddate = new Date();
        return this.orderRepo.create(data);
    }

    async update(orderId, data): Promise<Order> {
        return this.orderRepo.update(orderId, data);
    }

    async delete(orderId): Promise<Order> {
        return this.orderRepo.delete(orderId);
    }
}