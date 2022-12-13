import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ToppingsModule } from './modules/toppings.module';
import { MenuModule } from './modules/menu.module';
import { OrderModule } from './modules/order.module';
import { CouponModule } from './modules/coupon.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      autoCreate: true,
    }),
    ToppingsModule,

    MenuModule,
    OrderModule,
    CouponModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
