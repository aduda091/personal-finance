/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation CreateExpenseGroup($createExpenseGroupInput: CreateExpenseGroupInput) {\n        createExpenseGroup(createExpenseGroupInput: $createExpenseGroupInput) {\n            id\n            name\n        }\n    }\n": types.CreateExpenseGroupDocument,
    "\n    mutation UpdateExpenseGroup($updateExpenseGroupInput: UpdateExpenseGroupInput) {\n        updateExpenseGroup(updateExpenseGroupInput: $updateExpenseGroupInput) {\n            id\n            name\n        }\n    }\n": types.UpdateExpenseGroupDocument,
    "\n    query ExpenseGroups {\n        expenseGroups {\n            id\n            name\n        }\n    }\n": types.ExpenseGroupsDocument,
    "\n    mutation DeleteExpenseGroup($deleteExpenseGroupId: Int!) {\n        deleteExpenseGroup(id: $deleteExpenseGroupId) {\n            id\n        }\n    }\n": types.DeleteExpenseGroupDocument,
    "\n    query IncomeByPeriod($incomeByPeriodId: ID!) {\n        incomeByPeriod(id: $incomeByPeriodId) {\n            entries {\n                id\n                value\n                label {\n                    label\n                }\n            }\n            sum\n        }\n    }\n": types.IncomeByPeriodDocument,
    "\n    mutation CreateLabel($createLabelInput: CreateLabelInput) {\n        createLabel(createLabelInput: $createLabelInput) {\n            id\n            label\n            isIncome\n        }\n    }\n": types.CreateLabelDocument,
    "\n    mutation UpdateLabel($updateLabelInput: UpdateLabelInput) {\n        updateLabel(updateLabelInput: $updateLabelInput) {\n            id\n            label\n            isIncome\n        }\n    }\n": types.UpdateLabelDocument,
    "\n    query Labels {\n        labels {\n            id\n            label\n            isIncome\n        }\n    }\n": types.LabelsDocument,
    "\n    mutation DeleteLabel($deleteLabelId: Int!) {\n        deleteLabel(id: $deleteLabelId) {\n            id\n        }\n    }\n": types.DeleteLabelDocument,
    "\n    mutation CreatePeriod($createPeriodInput: CreatePeriodInput) {\n        createPeriod(createPeriodInput: $createPeriodInput) {\n            id\n            month\n            year\n        }\n    }\n": types.CreatePeriodDocument,
    "\n    mutation UpdatePeriod($updatePeriodInput: UpdatePeriodInput) {\n        updatePeriod(updatePeriodInput: $updatePeriodInput) {\n            id\n            month\n            year\n        }\n    }\n": types.UpdatePeriodDocument,
    "\n    query Periods {\n        periods {\n            id\n            month\n            year\n        }\n    }\n": types.PeriodsDocument,
    "\n    mutation DeletePeriod($deletePeriodId: Int!) {\n        deletePeriod(id: $deletePeriodId) {\n            id\n        }\n    }\n": types.DeletePeriodDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateExpenseGroup($createExpenseGroupInput: CreateExpenseGroupInput) {\n        createExpenseGroup(createExpenseGroupInput: $createExpenseGroupInput) {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    mutation CreateExpenseGroup($createExpenseGroupInput: CreateExpenseGroupInput) {\n        createExpenseGroup(createExpenseGroupInput: $createExpenseGroupInput) {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateExpenseGroup($updateExpenseGroupInput: UpdateExpenseGroupInput) {\n        updateExpenseGroup(updateExpenseGroupInput: $updateExpenseGroupInput) {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateExpenseGroup($updateExpenseGroupInput: UpdateExpenseGroupInput) {\n        updateExpenseGroup(updateExpenseGroupInput: $updateExpenseGroupInput) {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ExpenseGroups {\n        expenseGroups {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query ExpenseGroups {\n        expenseGroups {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteExpenseGroup($deleteExpenseGroupId: Int!) {\n        deleteExpenseGroup(id: $deleteExpenseGroupId) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteExpenseGroup($deleteExpenseGroupId: Int!) {\n        deleteExpenseGroup(id: $deleteExpenseGroupId) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query IncomeByPeriod($incomeByPeriodId: ID!) {\n        incomeByPeriod(id: $incomeByPeriodId) {\n            entries {\n                id\n                value\n                label {\n                    label\n                }\n            }\n            sum\n        }\n    }\n"): (typeof documents)["\n    query IncomeByPeriod($incomeByPeriodId: ID!) {\n        incomeByPeriod(id: $incomeByPeriodId) {\n            entries {\n                id\n                value\n                label {\n                    label\n                }\n            }\n            sum\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateLabel($createLabelInput: CreateLabelInput) {\n        createLabel(createLabelInput: $createLabelInput) {\n            id\n            label\n            isIncome\n        }\n    }\n"): (typeof documents)["\n    mutation CreateLabel($createLabelInput: CreateLabelInput) {\n        createLabel(createLabelInput: $createLabelInput) {\n            id\n            label\n            isIncome\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateLabel($updateLabelInput: UpdateLabelInput) {\n        updateLabel(updateLabelInput: $updateLabelInput) {\n            id\n            label\n            isIncome\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateLabel($updateLabelInput: UpdateLabelInput) {\n        updateLabel(updateLabelInput: $updateLabelInput) {\n            id\n            label\n            isIncome\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Labels {\n        labels {\n            id\n            label\n            isIncome\n        }\n    }\n"): (typeof documents)["\n    query Labels {\n        labels {\n            id\n            label\n            isIncome\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteLabel($deleteLabelId: Int!) {\n        deleteLabel(id: $deleteLabelId) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteLabel($deleteLabelId: Int!) {\n        deleteLabel(id: $deleteLabelId) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreatePeriod($createPeriodInput: CreatePeriodInput) {\n        createPeriod(createPeriodInput: $createPeriodInput) {\n            id\n            month\n            year\n        }\n    }\n"): (typeof documents)["\n    mutation CreatePeriod($createPeriodInput: CreatePeriodInput) {\n        createPeriod(createPeriodInput: $createPeriodInput) {\n            id\n            month\n            year\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdatePeriod($updatePeriodInput: UpdatePeriodInput) {\n        updatePeriod(updatePeriodInput: $updatePeriodInput) {\n            id\n            month\n            year\n        }\n    }\n"): (typeof documents)["\n    mutation UpdatePeriod($updatePeriodInput: UpdatePeriodInput) {\n        updatePeriod(updatePeriodInput: $updatePeriodInput) {\n            id\n            month\n            year\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Periods {\n        periods {\n            id\n            month\n            year\n        }\n    }\n"): (typeof documents)["\n    query Periods {\n        periods {\n            id\n            month\n            year\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeletePeriod($deletePeriodId: Int!) {\n        deletePeriod(id: $deletePeriodId) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeletePeriod($deletePeriodId: Int!) {\n        deletePeriod(id: $deletePeriodId) {\n            id\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;