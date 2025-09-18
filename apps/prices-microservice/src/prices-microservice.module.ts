import { Module } from "@nestjs/common";
import { PricesMicroserviceController } from "./prices-microservice.controller";
import { PricesMicroserviceService } from "./prices-microservice.service";
import { TwelveDataModule } from "@app/twelve-data";
import { GetStockModule } from "./get-stock/get-stock.module";
import { PRICES_MICROSERVICE } from "@app/contracts/prices-dtos";
import { AppConfigModule, AppConfigService } from "@app/app-config";
import { ClientProxyFactory } from "@nestjs/microservices";

//export const PRICES_MICROSERVICE = "PRICES_MICROSERVICE";

@Module({
  imports: [TwelveDataModule, GetStockModule, AppConfigModule],
  controllers: [PricesMicroserviceController],
  providers: [
    PricesMicroserviceService,
    {
      provide: PRICES_MICROSERVICE,
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      useFactory: (config: AppConfigService) => {
        return ClientProxyFactory.create(config.pricesOptions("PRICES_OPTIONS"));
      },
      inject: [AppConfigService],
    },
  ],
  exports: [PRICES_MICROSERVICE],
})
export class PricesMicroserviceModule {}
