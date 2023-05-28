import { Injectable } from '@nestjs/common';
import { Prisma, ExpenseGroup } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExpenseGroupService {
  constructor(private prisma: PrismaService) {}
  async findOne(
    expenseGroupWhereInput: Prisma.ExpenseGroupWhereInput,
  ): Promise<ExpenseGroup | null> {
    return this.prisma.expenseGroup.findFirst({
      where: expenseGroupWhereInput,
    });
  }

  async findAll(): Promise<ExpenseGroup[]> {
    return this.prisma.expenseGroup.findMany();
  }

  async create(data: Prisma.ExpenseGroupCreateInput): Promise<ExpenseGroup> {
    return this.prisma.expenseGroup.create({
      data,
    });
  }

  // todo: update, delete
}
