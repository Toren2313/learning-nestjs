import { Module } from "@nestjs/common";
import { TwelveDataService } from "./twelve-data.service";
import { AppConfigModule } from "@app/app-config";

@Module({
  imports: [AppConfigModule],
  providers: [
    {
      provide: "TwelveData",
      useClass: TwelveDataService,
    },
  ],
  exports: ["TwelveData"],
})
export class TwelveDataModule {}
