import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { CreateFlowerDto } from './flowers.dto';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  findAll() {
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateFlowerDto) {
    return this.flowersService.create(dto);
  }
}