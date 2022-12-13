import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Toppings, ToppingsDocument } from 'src/schemas/toppings.schema';

@Injectable()
export class ToppingsRepo {
    constructor(
        @InjectModel(Toppings.name)
        private readonly toppingsModel: Model<ToppingsDocument>) {}

    async create(data): Promise<Toppings> {
        return new this.toppingsModel(data).save();
    }

    async findAll(): Promise<Toppings[]> {
        return this.toppingsModel.find({})
            .exec();
    }

    async update(toppingsId, data): Promise<Toppings> {
        const filter = { _id: toppingsId };
        return this.toppingsModel.findOneAndUpdate(filter, data);
    }

    async delete(toppingsId): Promise<Toppings> {
        const filter = { _id: toppingsId };
        return this.toppingsModel.findByIdAndDelete(toppingsId);
    }
}