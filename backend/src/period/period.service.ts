import { Injectable } from '@nestjs/common';
import { Prisma, Period } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PeriodService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    periodWhereInput: Prisma.PeriodWhereInput,
  ): Promise<Period | null> {
    return this.prisma.period.findFirst({
      where: periodWhereInput,
    });
  }

  async findAll(): Promise<Period[]> {
    // todo: order by?
    return this.prisma.period.findMany();
  }

  async create(data: Prisma.PeriodCreateInput): Promise<Period> {
    return this.prisma.period.create({
      data,
    });
  }

  // todo: update, delete
}
