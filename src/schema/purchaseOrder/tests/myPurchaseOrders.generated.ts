/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
/* This file is automatically generated using `npm run graphql:types` */
import type * as Types from '../../../generated/types';

import type { JsonObject } from "type-fest";
import gql from 'graphql-tag';
export type MyPurchaseOrdersQueryVariables = Types.Exact<{
  input: Types.PaginatedInputMyPurchaseOrdersInput;
}>;


export type MyPurchaseOrdersQuery = { __typename?: 'Query', myPurchaseOrders: { __typename?: 'PaginatedPurchaseOrder', data: Array<{ __typename?: 'PurchaseOrder', id: string, status: Types.PurchaseOrderStatusEnum | null }> } };


export const MyPurchaseOrders = gql`
    query MyPurchaseOrders($input: PaginatedInputMyPurchaseOrdersInput!) {
  myPurchaseOrders(input: $input) {
    data {
      id
      status
    }
  }
}
    `;