import { Controller } from "@nestjs/common";
import { PricesMicroserviceService } from "./prices-microservice.service";
import { PRICES_PATTERNS } from "@app/contracts/prices-dtos";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class PricesMicroserviceController {
  constructor(private readonly pricesMicroserviceService: PricesMicroserviceService) {}

  @EventPattern(PRICES_PATTERNS.HELLO)
  getHello(): string {
    return this.pricesMicroserviceService.getHello();
  }
}
