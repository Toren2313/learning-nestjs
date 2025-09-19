import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { PRICES_PATTERNS } from "@app/contracts/prices-dtos";
import { PRICES_MICROSERVICE } from "@app/contracts/prices-dtos";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
  //* Sending Event pattern to 'prices-microservice'
  constructor(@Inject(PRICES_MICROSERVICE) private readonly prices: ClientProxy) {}
  getHello(): Observable<string> {
    return this.prices.send<string>(PRICES_PATTERNS.HELLO, {});
  }
}
