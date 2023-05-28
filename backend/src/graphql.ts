
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateEntryInput {
    value?: Nullable<number>;
    isIncome?: Nullable<boolean>;
    period: string;
    label: string;
    expenseGroup: string;
}

export interface CreateExpenseGroupInput {
    name?: Nullable<string>;
}

export interface CreateLabelInput {
    label?: Nullable<string>;
    isIncome?: Nullable<boolean>;
}

export interface CreatePeriodInput {
    month?: Nullable<number>;
    year?: Nullable<number>;
}

export interface IQuery {
    __typename?: 'IQuery';
    entrys(): Nullable<Nullable<Entry>[]> | Promise<Nullable<Nullable<Entry>[]>>;
    entry(id: string): Nullable<Entry> | Promise<Nullable<Entry>>;
    expenseGroups(): Nullable<Nullable<ExpenseGroup>[]> | Promise<Nullable<Nullable<ExpenseGroup>[]>>;
    expenseGroup(id: string): Nullable<ExpenseGroup> | Promise<Nullable<ExpenseGroup>>;
    labels(): Nullable<Nullable<Label>[]> | Promise<Nullable<Nullable<Label>[]>>;
    label(id: string): Nullable<Label> | Promise<Nullable<Label>>;
    periods(): Nullable<Nullable<Period>[]> | Promise<Nullable<Nullable<Period>[]>>;
    period(id: string): Nullable<Period> | Promise<Nullable<Period>>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createEntry(createEntryInput?: Nullable<CreateEntryInput>): Nullable<Entry> | Promise<Nullable<Entry>>;
    createExpenseGroup(createExpenseGroupInput?: Nullable<CreateExpenseGroupInput>): Nullable<ExpenseGroup> | Promise<Nullable<ExpenseGroup>>;
    createLabel(createLabelInput?: Nullable<CreateLabelInput>): Nullable<Label> | Promise<Nullable<Label>>;
    createPeriod(createPeriodInput?: Nullable<CreatePeriodInput>): Nullable<Period> | Promise<Nullable<Period>>;
}

export interface ISubscription {
    __typename?: 'ISubscription';
    entryCreated(): Nullable<Entry> | Promise<Nullable<Entry>>;
    expenseGroupCreated(): Nullable<ExpenseGroup> | Promise<Nullable<ExpenseGroup>>;
    labelCreated(): Nullable<Label> | Promise<Nullable<Label>>;
    periodCreated(): Nullable<Period> | Promise<Nullable<Period>>;
}

export interface Entry {
    __typename?: 'Entry';
    id?: Nullable<number>;
    value?: Nullable<number>;
    isIncome?: Nullable<boolean>;
    period?: Nullable<Period>;
    label?: Nullable<Label>;
    expenseGroup?: Nullable<ExpenseGroup>;
}

export interface ExpenseGroup {
    __typename?: 'ExpenseGroup';
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export interface Label {
    __typename?: 'Label';
    id?: Nullable<number>;
    label?: Nullable<string>;
    isIncome?: Nullable<boolean>;
}

export interface Period {
    __typename?: 'Period';
    id?: Nullable<number>;
    month?: Nullable<number>;
    year?: Nullable<number>;
}

type Nullable<T> = T | null;
