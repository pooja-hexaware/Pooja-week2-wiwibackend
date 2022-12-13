import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from '../controllers/order/order.controller';
import { OrderService } from '../services/order/order.service';
import { OrderRepo } from '../repository/order.repo';
import { Order, OrderSchema } from '../schemas/order.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])
    ],
    controllers: [OrderController],
    providers: [OrderService, OrderRepo],
    exports: [OrderService, OrderRepo]
  })
  export class OrderModule { }