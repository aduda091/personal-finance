import { Module } from '@nestjs/common';
import { LabelResolver } from './label.resolver';
import { LabelService } from './label.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [LabelResolver, LabelService, PrismaService],
})
export class LabelModule {}
