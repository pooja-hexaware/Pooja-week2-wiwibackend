import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { OrderDto } from "../../dto/order-dto.dto";
import { OrderService } from "../../services/order/order.service";

@Controller("Order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post("/Save")
  async create(@Body() orderDto: any) {
    const res = this.orderService.create(orderDto.data);
    return res;
  }

  @Get()
  async findAll() {
    return this.orderService.findAll();
  }

  @Post("/:id")
  update(@Param("id") id: string, @Body() orderDto: OrderDto) {
    return this.orderService.update(id, orderDto);
  }

  @Delete("/:id")
  delete(@Param("id") id: string) {
    return this.orderService.delete(id);
  }
}
