/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
/* This file is automatically generated using `npm run graphql:types` */
import type * as Types from '../../../generated/types';

import type { JsonObject } from "type-fest";
import gql from 'graphql-tag';
export type CreatePlaceholderdUsersMutationVariables = Types.Exact<{
  input: Types.CreatePlaceholderUsersInput;
}>;


export type CreatePlaceholderdUsersMutation = { __typename?: 'Mutation', createPlaceholderdUsers: Array<{ __typename?: 'User', id: string, email: string | null, lastName: string | null, username: string }> };


export const CreatePlaceholderdUsers = gql`
    mutation CreatePlaceholderdUsers($input: CreatePlaceholderUsersInput!) {
  createPlaceholderdUsers(input: $input) {
    id
    email
    lastName
    username
  }
}
    `;