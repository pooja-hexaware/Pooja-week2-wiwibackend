import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { type } from "os";

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  Order_id: Number;

  @Prop()
  total_amount: Number;

  @Prop()
  date: Date;

  @Prop()
  status: String;

  @Prop()
  name: String;

  @Prop()
  postalCode: String;

  @Prop()
  city: String;

  @Prop()
  phone: String;
 
}

export const OrderSchema = SchemaFactory.createForClass(Order);
