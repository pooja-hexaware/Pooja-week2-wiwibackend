import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
   
   @Prop()
   Menu_name: string; 
   
   @Prop()
   Menu_Description: string; 
   
   @Prop()
   Menu_price: Number; 
   
}

export const MenuSchema = SchemaFactory.createForClass(Menu);