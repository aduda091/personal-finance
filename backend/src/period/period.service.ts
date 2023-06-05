import { HttpException, Injectable } from '@nestjs/common';
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
    return this.prisma.period.findMany({
      orderBy: [
        {
          year: 'asc',
        },
        {
          month: 'asc',
        },
      ],
    });
  }

  async create(data: Prisma.PeriodCreateInput): Promise<Period> {
    const { month, year } = data;
    const existingPeriod = await this.prisma.period.findFirst({
      where: {
        AND: [
          {
            month: month,
          },
          {
            year: year,
          },
        ],
      },
    });
    if (existingPeriod) {
      throw new HttpException(
        'Period with these parameters already exists',
        409,
      );
    }
    return this.prisma.period.create({
      data,
    });
  }

  async delete(id: string): Promise<Period> {
    // delete all entries associated with this period
    await this.prisma.entry.deleteMany({
      where: { periodId: parseInt(id) },
    });
    return this.prisma.period.delete({
      where: { id: parseInt(id) },
    });
  }

  async update(data: UpdatePeriodInput): Promise<Period> {
    const { id, month, year } = data;
    const existingPeriod = await this.prisma.period.findFirst({
      where: {
        AND: [
          {
            month: month,
          },
          {
            year: year,
          },
        ],
      },
    });
    if (existingPeriod) {
      throw new HttpException(
        'Period with these parameters already exists',
        409,
      );
    }
    return this.prisma.period.update({
      where: { id: parseInt(id) },
      data: {
        month: month ?? undefined,
        year: year ?? undefined,
      },
    });
  }
}
