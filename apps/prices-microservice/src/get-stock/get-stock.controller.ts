import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { PRICES_PATTERNS } from "@app/contracts/prices-dtos";

@Controller("get-stock")
export class GetStockController {
  @EventPattern(PRICES_PATTERNS.GET_STOCK)
  async getStock(): Promise<string> {
    return "xd";
  }
}
