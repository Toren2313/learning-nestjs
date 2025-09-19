import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppConfigService } from "./app-config.service";
import path from "path";
import Joi from "joi";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.join(process.cwd(), ".env"),
      validationSchema: Joi.object({
        TD_API_KEY: Joi.string().required(),
        PORT_MAIN: Joi.number().port().default(3000),
        PORT_PRICES: Joi.number().port().default(3001),
      }),
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
