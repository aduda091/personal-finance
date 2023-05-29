import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { PeriodModule } from './period/period.module';
import { PrismaService } from './prisma/prisma.service';
import { LabelModule } from './label/label.module';
import { ExpenseGroupModule } from './expense-group/expense-group.module';
import { EntryModule } from './entry/entry.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        emitTypenameField: true,
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    PeriodModule,
    LabelModule,
    ExpenseGroupModule,
    EntryModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
