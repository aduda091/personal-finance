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
  createEntry: Entry;
  createExpenseGroup: ExpenseGroup;
  createLabel: Label;
  createPeriod: Period;
  deleteEntry?: Maybe<Entry>;
  deleteExpenseGroup?: Maybe<ExpenseGroup>;
  deleteLabel?: Maybe<Label>;
  deletePeriod?: Maybe<Period>;
  updateEntry: Entry;
  updateExpenseGroup: ExpenseGroup;
  updateLabel: Label;
  updatePeriod: Period;
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
  entries?: Maybe<Array<Entry>>;
  entry?: Maybe<Entry>;
  expenseGroup?: Maybe<ExpenseGroup>;
  expenseGroups?: Maybe<Array<ExpenseGroup>>;
  label?: Maybe<Label>;
  labels?: Maybe<Array<Label>>;
  period?: Maybe<Period>;
  periods?: Maybe<Array<Period>>;
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

export type CreateExpenseGroupMutationVariables = Exact<{
  createExpenseGroupInput?: InputMaybe<CreateExpenseGroupInput>;
}>;


export type CreateExpenseGroupMutation = { __typename?: 'Mutation', createExpenseGroup: { __typename?: 'ExpenseGroup', id: number, name: string } };

export type UpdateExpenseGroupMutationVariables = Exact<{
  updateExpenseGroupInput?: InputMaybe<UpdateExpenseGroupInput>;
}>;


export type UpdateExpenseGroupMutation = { __typename?: 'Mutation', updateExpenseGroup: { __typename?: 'ExpenseGroup', id: number, name: string } };

export type ExpenseGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type ExpenseGroupsQuery = { __typename?: 'Query', expenseGroups?: Array<{ __typename?: 'ExpenseGroup', id: number, name: string }> | null };

export type DeleteExpenseGroupMutationVariables = Exact<{
  deleteExpenseGroupId: Scalars['Int']['input'];
}>;


export type DeleteExpenseGroupMutation = { __typename?: 'Mutation', deleteExpenseGroup?: { __typename?: 'ExpenseGroup', id: number } | null };

export type CreateLabelMutationVariables = Exact<{
  createLabelInput?: InputMaybe<CreateLabelInput>;
}>;


export type CreateLabelMutation = { __typename?: 'Mutation', createLabel: { __typename?: 'Label', id: number, label: string, isIncome: boolean } };

export type UpdateLabelMutationVariables = Exact<{
  updateLabelInput?: InputMaybe<UpdateLabelInput>;
}>;


export type UpdateLabelMutation = { __typename?: 'Mutation', updateLabel: { __typename?: 'Label', id: number, label: string, isIncome: boolean } };

export type LabelsQueryVariables = Exact<{ [key: string]: never; }>;


export type LabelsQuery = { __typename?: 'Query', labels?: Array<{ __typename?: 'Label', id: number, label: string, isIncome: boolean }> | null };

export type DeleteLabelMutationVariables = Exact<{
  deleteLabelId: Scalars['Int']['input'];
}>;


export type DeleteLabelMutation = { __typename?: 'Mutation', deleteLabel?: { __typename?: 'Label', id: number } | null };

export type CreatePeriodMutationVariables = Exact<{
  createPeriodInput?: InputMaybe<CreatePeriodInput>;
}>;


export type CreatePeriodMutation = { __typename?: 'Mutation', createPeriod: { __typename?: 'Period', id: number, month: number, year: number } };

export type UpdatePeriodMutationVariables = Exact<{
  updatePeriodInput?: InputMaybe<UpdatePeriodInput>;
}>;


export type UpdatePeriodMutation = { __typename?: 'Mutation', updatePeriod: { __typename?: 'Period', id: number, month: number, year: number } };

export type PeriodsQueryVariables = Exact<{ [key: string]: never; }>;


export type PeriodsQuery = { __typename?: 'Query', periods?: Array<{ __typename?: 'Period', id: number, month: number, year: number }> | null };

export type DeletePeriodMutationVariables = Exact<{
  deletePeriodId: Scalars['Int']['input'];
}>;


export type DeletePeriodMutation = { __typename?: 'Mutation', deletePeriod?: { __typename?: 'Period', id: number } | null };


export const CreateExpenseGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateExpenseGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createExpenseGroupInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateExpenseGroupInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createExpenseGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createExpenseGroupInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createExpenseGroupInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateExpenseGroupMutation, CreateExpenseGroupMutationVariables>;
export const UpdateExpenseGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateExpenseGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateExpenseGroupInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateExpenseGroupInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateExpenseGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateExpenseGroupInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateExpenseGroupInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateExpenseGroupMutation, UpdateExpenseGroupMutationVariables>;
export const ExpenseGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExpenseGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expenseGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ExpenseGroupsQuery, ExpenseGroupsQueryVariables>;
export const DeleteExpenseGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteExpenseGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteExpenseGroupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteExpenseGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteExpenseGroupId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteExpenseGroupMutation, DeleteExpenseGroupMutationVariables>;
export const CreateLabelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLabel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createLabelInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLabelInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createLabelInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createLabelInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"isIncome"}}]}}]}}]} as unknown as DocumentNode<CreateLabelMutation, CreateLabelMutationVariables>;
export const UpdateLabelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLabel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateLabelInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLabelInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateLabelInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateLabelInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"isIncome"}}]}}]}}]} as unknown as DocumentNode<UpdateLabelMutation, UpdateLabelMutationVariables>;
export const LabelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"isIncome"}}]}}]}}]} as unknown as DocumentNode<LabelsQuery, LabelsQueryVariables>;
export const DeleteLabelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLabel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteLabelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteLabelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteLabelMutation, DeleteLabelMutationVariables>;
export const CreatePeriodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePeriod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPeriodInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePeriodInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPeriod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPeriodInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPeriodInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]} as unknown as DocumentNode<CreatePeriodMutation, CreatePeriodMutationVariables>;
export const UpdatePeriodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePeriod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePeriodInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePeriodInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePeriod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePeriodInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePeriodInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]} as unknown as DocumentNode<UpdatePeriodMutation, UpdatePeriodMutationVariables>;
export const PeriodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Periods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"periods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]} as unknown as DocumentNode<PeriodsQuery, PeriodsQueryVariables>;
export const DeletePeriodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePeriod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deletePeriodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePeriod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deletePeriodId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePeriodMutation, DeletePeriodMutationVariables>;