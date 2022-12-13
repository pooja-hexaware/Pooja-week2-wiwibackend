import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CouponDocument = Coupon & Document;

@Schema()
export class Coupon {
  @Prop()
  Coupon_code: string;

  @Prop()
  Coupon_id: Number;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
