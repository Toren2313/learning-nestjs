import { Module } from "@nestjs/common";
import { PricesMicroserviceController } from "./prices-microservice.controller";
import { PricesMicroserviceService } from "./prices-microservice.service";
import { TwelveDataModule } from "@app/twelve-data";
import { GetStockModule } from "./get-stock/get-stock.module";
import { AppConfigModule } from "@app/app-config";

//export const PRICES_MICROSERVICE = "PRICES_MICROSERVICE";

@Module({
  imports: [TwelveDataModule, GetStockModule, AppConfigModule],
  controllers: [PricesMicroserviceController],
  providers: [PricesMicroserviceService],
})
export class PricesMicroserviceModule {}
