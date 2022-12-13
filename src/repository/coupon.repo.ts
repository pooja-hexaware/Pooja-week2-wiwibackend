import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coupon, CouponDocument } from 'src/schemas/coupon.schema';

@Injectable()
export class CouponRepo {
    constructor(
        @InjectModel(Coupon.name)
        private readonly couponModel: Model<CouponDocument>) {}

    async create(data): Promise<Coupon> {
        return new this.couponModel(data).save();
    }

    async findAll(): Promise<Coupon[]> {
        return this.couponModel.find({})
            .exec();
    }

    async update(couponId, data): Promise<Coupon> {
        const filter = { _id: couponId };
        return this.couponModel.findOneAndUpdate(filter, data);
    }

    async delete(couponId): Promise<Coupon> {
        const filter = { _id: couponId };
        return this.couponModel.findByIdAndDelete(couponId);
    }
}