import { AppConfigService } from "@app/app-config";
import { Injectable } from "@nestjs/common";
import TwelveData from "twelvedata-ts";

@Injectable()
export class TwelveDataService extends TwelveData {
  constructor(private readonly conf: AppConfigService) {
    super({
      apiKey: conf.get("TD_API_KEY"),
      creditsPerMinute: 8,
    });
  }
}
