import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppConfigModule } from "@app/app-config";
import { GetStockModule } from "./get-stock/get-stock.module";
import { MicroserviceClientModule } from "./microservice-client.module";

@Module({
  imports: [AppConfigModule, GetStockModule, MicroserviceClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
