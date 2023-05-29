import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EntryService } from './entry.service';
import { CreateEntryInput, UpdateEntryInput } from 'src/graphql';

@Resolver('Entry')
export class EntryResolver {
  constructor(private readonly entryService: EntryService) {}

  @Query('entries')
  async findAll() {
    return this.entryService.findAll();
  }

  @Query('entry')
  async findOne(@Args('id') id: string) {
    return this.entryService.findOne(id);
  }

  @Mutation('createEntry')
  async create(@Args('input') input: CreateEntryInput) {
    return this.entryService.create(input);
  }

  @Mutation('updateEntry')
  async update(@Args('updateEntryInput') input: UpdateEntryInput) {
    return this.entryService.update(input);
  }

  @Mutation('deleteEntry')
  async delete(@Args('id') id: string) {
    return this.entryService.delete(id);
  }
}
