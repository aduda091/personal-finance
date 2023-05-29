import { Injectable } from '@nestjs/common';
import { Prisma, ExpenseGroup } from '@prisma/client';
import { UpdateExpenseGroupInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExpenseGroupService {
  constructor(private prisma: PrismaService) {}
  async findOne(id: string): Promise<ExpenseGroup | null> {
    return this.prisma.expenseGroup.findFirst({
      where: { id: parseInt(id) },
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

  async delete(id: string): Promise<ExpenseGroup> {
    return this.prisma.expenseGroup.delete({
      where: { id: parseInt(id) },
    });
  }

  async update(data: UpdateExpenseGroupInput): Promise<ExpenseGroup> {
    const { id, name } = data;
    return this.prisma.expenseGroup.update({
      where: { id: parseInt(id) },
      data: {
        name: name ?? undefined,
      },
    });
  }
}
