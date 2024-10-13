import { Module } from '@nestjs/common';
import { FlowersService } from '../flowers/flowers.service';
import { FlowersGqlResolver } from './flowers-gql.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [FlowersGqlResolver, FlowersService, PrismaService],
})
export class FlowersGqlModule {}
