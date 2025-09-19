import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GetStockModule } from "./get-stock/get-stock.module";
import { MicroserviceClientModule } from "./microservice-client.module";
import { AppConfigModule } from "@app/app-config";

@Module({
  imports: [GetStockModule, MicroserviceClientModule, AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
