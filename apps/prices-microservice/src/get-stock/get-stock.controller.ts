import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { PRICES_PATTERNS } from "@app/contracts/prices-dtos";

@Controller("get-stock")
export class GetStockController {
  //* reciving Event pattern from api gateway and returning value
  @EventPattern(PRICES_PATTERNS.GET_STOCK)
  async getStock(): Promise<string> {
    return "lolz";
  }
}
