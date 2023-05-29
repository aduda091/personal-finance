import { Injectable } from '@nestjs/common';
import { Entry } from '@prisma/client';
import { CreateEntryInput, UpdateEntryInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EntryService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<Entry | null> {
    return this.prisma.entry.findFirst({
      where: { id: parseInt(id) },
      include: {
        expenseGroup: true,
        label: true,
        period: true,
      },
    });
  }

  async findAll(): Promise<Entry[]> {
    return this.prisma.entry.findMany({
      include: {
        expenseGroup: true,
        label: true,
        period: true,
      },
    });
  }

  async create(data: CreateEntryInput): Promise<Entry> {
    const { isIncome, value, label, period, expenseGroup } = data;
    return this.prisma.entry.create({
      data: {
        isIncome,
        value,
        label: { connect: { id: parseInt(label) } },
        period: { connect: { id: parseInt(period) } },
        expenseGroup: expenseGroup
          ? { connect: { id: parseInt(expenseGroup) } }
          : undefined,
      },
      include: {
        expenseGroup: true,
        label: true,
        period: true,
      },
    });
  }

  async delete(id: string): Promise<Entry> {
    return this.prisma.entry.delete({
      where: { id: parseInt(id) },
    });
  }

  async update(data: UpdateEntryInput) {
    const { id, isIncome, value, label, period, expenseGroup } = data;
    return this.prisma.entry.update({
      where: { id: parseInt(id) },
      data: {
        isIncome,
        value,
        label: label ? { connect: { id: parseInt(label) } } : undefined,
        period: period ? { connect: { id: parseInt(period) } } : undefined,
        expenseGroup: expenseGroup
          ? { connect: { id: parseInt(expenseGroup) } }
          : undefined,
      },
      include: {
        expenseGroup: true,
        label: true,
        period: true,
      },
    });
  }
}
