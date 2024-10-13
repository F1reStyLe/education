import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
   private client: ClientProxy

   constructor() {
      this.client = ClientProxyFactory.create({
         transport: Transport.TCP,
         options: {
            host: 'localhost',
            port: 3000,
         },
      });
   }

   sendMessage() {
      return this.client.emit('message', 'New order #1233');
   }
}