import { Injectable } from "@nestjs/common";
import { CouponRepo } from "src/repository/coupon.repo";
import { Coupon } from "src/schemas/coupon.schema";
import { json } from "stream/consumers";

@Injectable()
export class CouponService {
  getDiscountFromCode(cartItems) {
    if (cartItems.couponCode === "JUMBO") {
      let Discount = 0;

      const COMBINATIONS = {
        "Loaded Veggie-Hummus Falafel": 1.22,
        "Loaded Veggie-Feta Falafel": 0.65,
        "Hummus Falafel-Feta Falafel": 1.23,
        "Hummus Falafel-Double Bagel": 1.65,
      };

      for (let i = 0; i < cartItems.data.length; i++) {
        if (cartItems.data[i].quantity >= 2) {
          Discount = Discount + 0.15;
        }
        for (let j = i + 1; j < cartItems.data.length; j++) {
          Discount =
            Discount +
            COMBINATIONS[
              cartItems.data[i]["name"] + "-" + cartItems.data[j]["name"]
            ];
        }
      }

      return Discount;
    }
  }
  constructor(private readonly couponRepo: CouponRepo) {}

  async findAll(): Promise<Coupon[]> {
    return this.couponRepo.findAll();
  }

  async create(data): Promise<Coupon> {
    data.createddate = new Date();
    return this.couponRepo.create(data);
  }

  async update(couponId, data): Promise<Coupon> {
    return this.couponRepo.update(couponId, data);
  }

  async delete(couponId): Promise<Coupon> {
    return this.couponRepo.delete(couponId);
  }
}
