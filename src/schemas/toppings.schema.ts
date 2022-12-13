import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToppingsDocument = Toppings & Document;

@Schema()
export class Toppings {
   
   @Prop()
   Name: string; 
   
   @Prop()
   price: Number; 
   
}

export const ToppingsSchema = SchemaFactory.createForClass(Toppings);