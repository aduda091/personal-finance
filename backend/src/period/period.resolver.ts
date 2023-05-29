import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PeriodService } from './period.service';
import { CreatePeriodInput } from 'src/graphql';

@Resolver('Period')
export class PeriodResolver {
  constructor(private readonly periodService: PeriodService) {}

  @Query('periods')
  async findAll() {
    return this.periodService.findAll();
  }

  @Query('period')
  async findOne(@Args('id') id: string) {
    return this.periodService.findOne(id);
  }

  @Mutation('createPeriod')
  async create(@Args('input') input: CreatePeriodInput) {
    return this.periodService.create(input);
  }

  @Mutation('deletePeriod')
  async delete(@Args('id') id: string) {
    return this.periodService.delete(id);
  }
}
