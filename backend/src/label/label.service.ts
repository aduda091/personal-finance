import { Injectable } from '@nestjs/common';
import { Prisma, Label } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LabelService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    labelWhereInput: Prisma.LabelWhereInput,
  ): Promise<Label | null> {
    return this.prisma.label.findFirst({
      where: labelWhereInput,
    });
  }

  async findAll(): Promise<Label[]> {
    return this.prisma.label.findMany();
  }

  async create(data: Prisma.LabelCreateInput): Promise<Label> {
    return this.prisma.label.create({
      data,
    });
  }

  // todo: update, delete
}
