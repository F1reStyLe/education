import { Query, Resolver } from '@nestjs/graphql';
import { FlowersService } from 'src/flowers/flowers.service';
import { FlowersModel } from './flowers.model';

@Resolver()
export class FlowersGqlResolver {
  constructor(private readonly flowersService: FlowersService) {}

  @Query(() => [FlowersModel], { name: 'flowers' })
  findAll() {
    return this.flowersService.findAll()
  }
}
