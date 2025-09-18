import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { PRICES_MICROSERVICE } from "@app/contracts/prices-dtos";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRICES_MICROSERVICE,
        transport: Transport.TCP,
        options: {
          host: "localhost",
          port: 2115,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class MicroserviceClientModule {}
