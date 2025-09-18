import { NestFactory } from "@nestjs/core";
import { PricesMicroserviceModule } from "./prices-microservice.module";
import { MicroserviceOptions } from "@nestjs/microservices";
import { AppConfigService } from "@app/app-config";

async function bootstrap(): Promise<void> {
  const context = await NestFactory.createApplicationContext(PricesMicroserviceModule);
  const config = context.get(AppConfigService);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(PricesMicroserviceModule, config.pricesOptions("PRICES_MICROSERVICE_OPTIONS"));
  await app.listen();
}
bootstrap();
