import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Query,
  } from "@nestjs/common";
  import { CouponDto } from "../../dto/coupon-dto.dto";
  import { CouponService } from "../../services/coupon/coupon.service";
  
  @Controller("Coupon")
  export class CouponController {
    constructor(private readonly couponService: CouponService) {}
  
    @Post()
    async create(@Body() menuDto: CouponDto) {
      const res = this.couponService.create(menuDto);
      return res;
    }
  
    @Get("getAllCouponItems")
    async findAll() {
      return this.couponService.findAll();
    }
  
    @Post("getCouponDiscount")
    getDiscount( @Body() cartItems: any) {
          return this.couponService.getDiscountFromCode(cartItems)
      }
  
    @Post("/:id")
    update(@Param("id") id: string, @Body() menuDto: CouponDto) {
      return this.couponService.update(id, menuDto);
    }
  
    @Delete("/:id")
    delete(@Param("id") id: string) {
      return this.couponService.delete(id);
    }
  }
  