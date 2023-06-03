/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateEntryInput = {
  expenseGroup?: InputMaybe<Scalars['ID']['input']>;
  isIncome: Scalars['Boolean']['input'];
  label: Scalars['ID']['input'];
  period: Scalars['ID']['input'];
  value: Scalars['Float']['input'];
};

export type CreateExpenseGroupInput = {
  name: Scalars['String']['input'];
};

export type CreateLabelInput = {
  isIncome: Scalars['Boolean']['input'];
  label: Scalars['String']['input'];
};

export type CreatePeriodInput = {
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type Entry = {
  __typename?: 'Entry';
  expenseGroup?: Maybe<ExpenseGroup>;
  id: Scalars['Int']['output'];
  isIncome: Scalars['Boolean']['output'];
  label: Label;
  period: Period;
  value: Scalars['Float']['output'];
};

export type ExpenseGroup = {
  __typename?: 'ExpenseGroup';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Label = {
  __typename?: 'Label';
  id: Scalars['Int']['output'];
  isIncome: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEntry?: Maybe<Entry>;
  createExpenseGroup?: Maybe<ExpenseGroup>;
  createLabel?: Maybe<Label>;
  createPeriod?: Maybe<Period>;
  deleteEntry?: Maybe<Entry>;
  deleteExpenseGroup?: Maybe<ExpenseGroup>;
  deleteLabel?: Maybe<Label>;
  deletePeriod?: Maybe<Period>;
  updateEntry?: Maybe<Entry>;
  updateExpenseGroup?: Maybe<ExpenseGroup>;
  updateLabel?: Maybe<Label>;
  updatePeriod?: Maybe<Period>;
};


export type MutationCreateEntryArgs = {
  createEntryInput?: InputMaybe<CreateEntryInput>;
};


export type MutationCreateExpenseGroupArgs = {
  createExpenseGroupInput?: InputMaybe<CreateExpenseGroupInput>;
};


export type MutationCreateLabelArgs = {
  createLabelInput?: InputMaybe<CreateLabelInput>;
};


export type MutationCreatePeriodArgs = {
  createPeriodInput?: InputMaybe<CreatePeriodInput>;
};


export type MutationDeleteEntryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteExpenseGroupArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteLabelArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePeriodArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateEntryArgs = {
  updateEntryInput?: InputMaybe<UpdateEntryInput>;
};


export type MutationUpdateExpenseGroupArgs = {
  updateExpenseGroupInput?: InputMaybe<UpdateExpenseGroupInput>;
};


export type MutationUpdateLabelArgs = {
  updateLabelInput?: InputMaybe<UpdateLabelInput>;
};


export type MutationUpdatePeriodArgs = {
  updatePeriodInput?: InputMaybe<UpdatePeriodInput>;
};

export type Period = {
  __typename?: 'Period';
  id: Scalars['Int']['output'];
  month: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  entries?: Maybe<Array<Maybe<Entry>>>;
  entry?: Maybe<Entry>;
  expenseGroup?: Maybe<ExpenseGroup>;
  expenseGroups?: Maybe<Array<ExpenseGroup>>;
  label?: Maybe<Label>;
  labels?: Maybe<Array<Maybe<Label>>>;
  period?: Maybe<Period>;
  periods?: Maybe<Array<Maybe<Period>>>;
};


export type QueryEntryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExpenseGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLabelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPeriodArgs = {
  id: Scalars['ID']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  entryCreated?: Maybe<Entry>;
  expenseGroupCreated?: Maybe<ExpenseGroup>;
  labelCreated?: Maybe<Label>;
  periodCreated?: Maybe<Period>;
};

export type UpdateEntryInput = {
  expenseGroup?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  isIncome?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['ID']['input']>;
  period?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateExpenseGroupInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateLabelInput = {
  id: Scalars['ID']['input'];
  isIncome?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePeriodInput = {
  id: Scalars['ID']['input'];
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type ExpenseGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type ExpenseGroupsQuery = { __typename?: 'Query', expenseGroups?: Array<{ __typename?: 'ExpenseGroup', id: number, name: string }> | null };


export const ExpenseGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExpenseGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expenseGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ExpenseGroupsQuery, ExpenseGroupsQueryVariables>;