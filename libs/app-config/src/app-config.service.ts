import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppConfigInterface } from "./config/app-config.env";
import { MicroserviceOptions, TcpClientOptions, Transport } from "@nestjs/microservices";

interface prices {
  PRICES_OPTIONS;
  PRICES_MICROSERVICE_OPTIONS;
}

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService<AppConfigInterface>) {}

  private get pricesOpts(): TcpClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        port: parseFloat(this.get("PORT_PRICES")),
      },
    };
  }

  private get microservicePricesOption(): MicroserviceOptions {
    return {
      transport: Transport.TCP,
      options: {
        port: parseFloat(this.get("PORT_PRICES")),
      },
    };
  }

  public pricesOptions(type: "PRICES_MICROSERVICE_OPTIONS"): MicroserviceOptions;
  public pricesOptions(type: "PRICES_OPTIONS"): TcpClientOptions;

  public pricesOptions(type: keyof prices): TcpClientOptions | MicroserviceOptions {
    return type === "PRICES_OPTIONS" ? this.pricesOpts : this.microservicePricesOption;
  }

  get<T extends keyof AppConfigInterface>(key: T): string {
    return this.configService.get(key) || "not found";
  }
}
