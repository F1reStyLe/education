import { Module } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), FlowersModule],
})
export class AppModule {}
