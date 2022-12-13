import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToppingsController } from '../controllers/toppings/toppings.controller';
import { ToppingsService } from '../services/toppings/toppings.service';
import { ToppingsRepo } from '../repository/toppings.repo';
import { Toppings, ToppingsSchema } from '../schemas/toppings.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Toppings.name, schema: ToppingsSchema }])
    ],
    controllers: [ToppingsController],
    providers: [ToppingsService, ToppingsRepo],
    exports: [ToppingsService, ToppingsRepo]
  })
  export class ToppingsModule { }