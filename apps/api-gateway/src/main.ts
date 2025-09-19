import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  // FIXME: replace proccess.env with AppConfigService (i want to have env variables from one place)
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT_MAIN || 3000);
}
bootstrap();
