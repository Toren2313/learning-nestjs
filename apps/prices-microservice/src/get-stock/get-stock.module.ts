import { Module } from "@nestjs/common";
import { GetStockController } from "./get-stock.controller";

@Module({
  controllers: [GetStockController],
})
export class GetStockModule {}
