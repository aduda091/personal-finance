import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExpenseGroupService } from './expense-group.service';
import { CreateExpenseGroupInput, UpdateExpenseGroupInput } from 'src/graphql';

@Resolver('ExpenseGroup')
export class ExpenseGroupResolver {
  constructor(private readonly expenseGroupService: ExpenseGroupService) {}

  @Query('expenseGroups')
  async findAll() {
    return this.expenseGroupService.findAll();
  }

  @Query('expenseGroup')
  async findOne(@Args('id') id: string) {
    return this.expenseGroupService.findOne(id);
  }

  @Mutation('createExpenseGroup')
  async create(
    @Args('createExpenseGroupInput') input: CreateExpenseGroupInput,
  ) {
    return this.expenseGroupService.create(input);
  }

  @Mutation('updateExpenseGroup')
  async update(
    @Args('updateExpenseGroupInput') input: UpdateExpenseGroupInput,
  ) {
    return this.expenseGroupService.update(input);
  }

  @Mutation('deleteExpenseGroup')
  async delete(@Args('id') id: string) {
    return this.expenseGroupService.delete(id);
  }
}
