import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { CreateLabelInput } from 'src/graphql';

@Resolver('Label')
export class LabelResolver {
  constructor(private readonly labelService: LabelService) {}

  @Query('labels')
  async findAll() {
    return this.labelService.findAll();
  }

  @Query('label')
  async findOne(@Args('id') id: string) {
    return this.labelService.findOne(id);
  }

  @Mutation('createLabel')
  async create(@Args('input') input: CreateLabelInput) {
    return this.labelService.create(input);
  }

  @Mutation('deleteLabel')
  async delete(@Args('id') id: string) {
    return this.labelService.delete(id);
  }
}
