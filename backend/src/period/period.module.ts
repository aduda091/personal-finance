import { Module } from '@nestjs/common';
import { PeriodResolver } from './period.resolver';
import { PeriodService } from './period.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PeriodResolver, PeriodService, PrismaService],
})
export class PeriodModule {}
