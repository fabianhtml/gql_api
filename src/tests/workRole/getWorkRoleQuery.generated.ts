/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
/* This file is automatically generated using `npm run graphql:types` */
import type * as Types from '../../generated/types';

import type { JsonObject } from "type-fest";
import gql from 'graphql-tag';
export type GetWorkRolesAndSenioritiesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetWorkRolesAndSenioritiesQuery = { __typename?: 'Query', workRoles: Array<{ __typename?: 'WorkRole', description: string | null, id: string, name: string, seniorities: Array<{ __typename?: 'WorkSeniority', id: string, name: string, description: string | null }> }> };


export const GetWorkRolesAndSeniorities = gql`
    query GetWorkRolesAndSeniorities {
  workRoles {
    description
    id
    name
    seniorities {
      id
      name
      description
    }
  }
}
    `;