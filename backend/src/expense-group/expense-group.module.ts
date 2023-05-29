import { Module } from '@nestjs/common';
import { ExpenseGroupResolver } from './expense-group.resolver';
import { ExpenseGroupService } from './expense-group.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ExpenseGroupResolver, ExpenseGroupService, PrismaService],
})
export class ExpenseGroupModule {}
