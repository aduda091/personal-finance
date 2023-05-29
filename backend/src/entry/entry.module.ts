import { Module } from '@nestjs/common';
import { EntryResolver } from './entry.resolver';
import { EntryService } from './entry.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [EntryResolver, EntryService, PrismaService],
})
export class EntryModule {}
