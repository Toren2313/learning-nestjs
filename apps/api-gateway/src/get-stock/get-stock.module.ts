import { Module } from "@nestjs/common";
import { GetStockController } from "./get-stock.controller";
import { MicroserviceClientModule } from "../microservice-client.module";

@Module({
  imports: [MicroserviceClientModule],
  controllers: [GetStockController],
})
export class GetStockModule {}
