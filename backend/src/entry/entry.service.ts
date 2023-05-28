import { Injectable } from '@nestjs/common';
import { Prisma, Entry } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EntryService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    entryWhereInput: Prisma.EntryWhereInput,
  ): Promise<Entry | null> {
    return this.prisma.entry.findFirst({
      where: entryWhereInput,
    });
  }

  async findAll(): Promise<Entry[]> {
    return this.prisma.entry.findMany();
  }

  async create(data: Prisma.EntryCreateInput): Promise<Entry> {
    return this.prisma.entry.create({
      data,
    });
  }

  // todo: update, delete
}
