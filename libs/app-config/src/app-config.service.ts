import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppConfigInterface } from "./config/app-config.env";
import { MicroserviceOptions, TcpClientOptions, Transport } from "@nestjs/microservices";

interface prices {
  PRICES_OPTIONS;
  PRICES_MICROSERVICE_OPTIONS;
}

/*
 *                        Here, I created custom ConfigService
 *      public method 'get()' with parameter keyof AppConfigInterface as generic type
 *      when called, retrieve environment variables and return them to the user
 *
 *      public method 'pricesOptions()' is a method with overload; return type method is depend on args
 *      returns 'pricesOpts' or 'microservicePricesOption'
 *
 *      private getter 'pricesOpts' returns parameters required in registration
 *      microservices as TcpClientOptions
 *
 *      private getter 'microservicePricesOption' returns parameters required in creating
 *      microservices as MicroServiceOptions
 *
 *
 */
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
