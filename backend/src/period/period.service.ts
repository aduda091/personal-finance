import { Injectable } from '@nestjs/common';
import { Prisma, Period } from '@prisma/client';
import { UpdatePeriodInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PeriodService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<Period | null> {
    return this.prisma.period.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async findAll(): Promise<Period[]> {
    // todo: order by?
    return this.prisma.period.findMany();
  }

  async create(data: Prisma.PeriodCreateInput): Promise<Period> {
    // TODO: check if month + year combination already exists
    return this.prisma.period.create({
      data,
    });
  }

  async delete(id: string): Promise<Period> {
    return this.prisma.period.delete({
      where: { id: parseInt(id) },
    });
  }

  async update(data: UpdatePeriodInput): Promise<Period> {
    // TODO: check if month + year combination already exists
    const { id, month, year } = data;
    return this.prisma.period.update({
      where: { id: parseInt(id) },
      data: {
        month: month ?? undefined,
        year: year ?? undefined,
      },
    });
  }
}
