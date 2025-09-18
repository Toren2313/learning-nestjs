import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { PRICES_PATTERNS } from "@app/contracts/prices-dtos";
import { PRICES_MICROSERVICE } from "@app/contracts/prices-dtos";
import { Observable } from "rxjs";

@Controller("get-stock")
export class GetStockController {
  constructor(@Inject(PRICES_MICROSERVICE) private readonly prices: ClientProxy) {}

  @Get()
  getStock(): Observable<string> {
    return this.prices.send(PRICES_PATTERNS.GET_STOCK, {});
  }
}
