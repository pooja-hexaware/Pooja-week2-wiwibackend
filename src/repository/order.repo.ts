import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/schemas/order.schema';

@Injectable()
export class OrderRepo {
    constructor(
        @InjectModel(Order.name)
        private readonly orderModel: Model<OrderDocument>) {}

    async create(data): Promise<Order> {
        return new this.orderModel(data).save();
    }

    async findAll(): Promise<Order[]> {
        return this.orderModel.find({})
            .exec();
    }

    async update(orderId, data): Promise<Order> {
        const filter = { _id: orderId };
        return this.orderModel.findOneAndUpdate(filter, data);
    }

    async delete(orderId): Promise<Order> {
        const filter = { _id: orderId };
        return this.orderModel.findByIdAndDelete(orderId);
    }
}