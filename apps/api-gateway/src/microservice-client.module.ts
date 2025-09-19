import { Global, Module } from "@nestjs/common";
import { ClientProxyFactory } from "@nestjs/microservices";
import { PRICES_MICROSERVICE } from "@app/contracts/prices-dtos";
import { AppConfigService } from "@app/app-config";

@Global()
@Module({
  imports: [
    //* simple microservice register with hardcode (good with simple projects)
    // ClientsModule.register([
    //   {
    //     name: PRICES_MICROSERVICE,
    //     transport: Transport.TCP,
    //     options: {
    //       host: "localhost",
    //       port: 2115,
    //     },
    //   },
    // ]),
  ],

  //* More advanced way to register modules, useFactory creates custom singleton instance of providers

  providers: [
    {
      provide: PRICES_MICROSERVICE,
      inject: [AppConfigService],
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      useFactory: (configService: AppConfigService) => {
        return ClientProxyFactory.create(configService.pricesOptions("PRICES_OPTIONS"));
      },
    },
  ],
  exports: [PRICES_MICROSERVICE],
})
export class MicroserviceClientModule {}
