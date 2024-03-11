import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()

export class AppService {
constructor(
  private readonly config:ConfigService
){}
  getHello() {
    const environment = this.config.get<string>('ENVIRONMENT')
    const clients = this.config.get<[]>('CLIENTS')
    return {
      'environmet' : environment,
      'clients' : clients

    };
  }
}
