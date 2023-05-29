import { Injectable } from '@nestjs/common';
import { Prisma, Label } from '@prisma/client';
import { UpdateLabelInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LabelService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<Label | null> {
    return this.prisma.label.findFirst({
      where: { id: parseInt(id) },
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

  async delete(id: string): Promise<Label> {
    return this.prisma.label.delete({
      where: { id: parseInt(id) },
    });
  }

  async update(data: UpdateLabelInput): Promise<Label> {
    const { id, label, isIncome } = data;
    return this.prisma.label.update({
      where: { id: parseInt(id) },
      data: {
        isIncome: isIncome ?? undefined,
        label: label ?? undefined,
      },
    });
  }
}
