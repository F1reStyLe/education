import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateFlowerDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FlowersService {
  constructor(private readonly prisma: PrismaService, private readonly configService: ConfigService) {}

   findAll() {
    return this.prisma.flower.findMany();
  }

  create(dto: CreateFlowerDto) {
    return this.prisma.flower.create({
      data: dto,
    });
  }
}