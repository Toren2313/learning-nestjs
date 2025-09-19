import { Module } from "@nestjs/common";
import { TwelveDataService } from "./twelve-data.service";

@Module({
  /*
   * Most simple custom provider
   * to inject u need to use @Inject() decorator and put as first argument (string) provider name, in this case 'TwelveData'
   * and import TwelveDataModule in module u want to use TwelveDataModule
   */
  providers: [
    {
      provide: "TwelveData",
      useClass: TwelveDataService,
    },
  ],
  exports: ["TwelveData"],
})
export class TwelveDataModule {}
