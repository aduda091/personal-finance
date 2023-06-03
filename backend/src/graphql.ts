
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateEntryInput {
    value: number;
    isIncome: boolean;
    period: string;
    label: string;
    expenseGroup?: Nullable<string>;
}

export interface UpdateEntryInput {
    id: string;
    value?: Nullable<number>;
    isIncome?: Nullable<boolean>;
    period?: Nullable<string>;
    label?: Nullable<string>;
    expenseGroup?: Nullable<string>;
}

export interface CreateExpenseGroupInput {
    name: string;
}

export interface UpdateExpenseGroupInput {
    id: string;
    name: string;
}

export interface CreateLabelInput {
    label: string;
    isIncome: boolean;
}

export interface UpdateLabelInput {
    id: string;
    label?: Nullable<string>;
    isIncome?: Nullable<boolean>;
}

export interface CreatePeriodInput {
    month: number;
    year: number;
}

export interface UpdatePeriodInput {
    id: string;
    month?: Nullable<number>;
    year?: Nullable<number>;
}

export interface IQuery {
    __typename?: 'IQuery';
    entries(): Nullable<Entry[]> | Promise<Nullable<Entry[]>>;
    entry(id: string): Nullable<Entry> | Promise<Nullable<Entry>>;
    expenseGroups(): Nullable<ExpenseGroup[]> | Promise<Nullable<ExpenseGroup[]>>;
    expenseGroup(id: string): Nullable<ExpenseGroup> | Promise<Nullable<ExpenseGroup>>;
    labels(): Nullable<Label[]> | Promise<Nullable<Label[]>>;
    label(id: string): Nullable<Label> | Promise<Nullable<Label>>;
    periods(): Nullable<Period[]> | Promise<Nullable<Period[]>>;
    period(id: string): Nullable<Period> | Promise<Nullable<Period>>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createEntry(createEntryInput?: Nullable<CreateEntryInput>): Entry | Promise<Entry>;
    updateEntry(updateEntryInput?: Nullable<UpdateEntryInput>): Entry | Promise<Entry>;
    deleteEntry(id: number): Nullable<Entry> | Promise<Nullable<Entry>>;
    createExpenseGroup(createExpenseGroupInput?: Nullable<CreateExpenseGroupInput>): ExpenseGroup | Promise<ExpenseGroup>;
    updateExpenseGroup(updateExpenseGroupInput?: Nullable<UpdateExpenseGroupInput>): ExpenseGroup | Promise<ExpenseGroup>;
    deleteExpenseGroup(id: number): Nullable<ExpenseGroup> | Promise<Nullable<ExpenseGroup>>;
    createLabel(createLabelInput?: Nullable<CreateLabelInput>): Label | Promise<Label>;
    updateLabel(updateLabelInput?: Nullable<UpdateLabelInput>): Label | Promise<Label>;
    deleteLabel(id: number): Nullable<Label> | Promise<Nullable<Label>>;
    createPeriod(createPeriodInput?: Nullable<CreatePeriodInput>): Period | Promise<Period>;
    updatePeriod(updatePeriodInput?: Nullable<UpdatePeriodInput>): Period | Promise<Period>;
    deletePeriod(id: number): Nullable<Period> | Promise<Nullable<Period>>;
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
    id: number;
    value: number;
    isIncome: boolean;
    period: Period;
    label: Label;
    expenseGroup?: Nullable<ExpenseGroup>;
}

export interface ExpenseGroup {
    __typename?: 'ExpenseGroup';
    id: number;
    name: string;
}

export interface Label {
    __typename?: 'Label';
    id: number;
    label: string;
    isIncome: boolean;
}

export interface Period {
    __typename?: 'Period';
    id: number;
    month: number;
    year: number;
}

type Nullable<T> = T | null;
