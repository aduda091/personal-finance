import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { CreateLabelInput, UpdateLabelInput } from 'src/graphql';

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
  async create(@Args('createLabelInput') input: CreateLabelInput) {
    return this.labelService.create(input);
  }

  @Mutation('updateLabel')
  async update(@Args('updateLabelInput') input: UpdateLabelInput) {
    return this.labelService.update(input);
  }

  @Mutation('deleteLabel')
  async delete(@Args('id') id: string) {
    return this.labelService.delete(id);
  }
}
