/* eslint-disable */
/* @ts-nocheck */
/* prettier-ignore */
/* This file is automatically generated using `npm run graphql:types` */
import type * as Types from '../../generated/types';

import type { JsonObject } from "type-fest";
import gql from 'graphql-tag';
export type GetEventsQueryVariables = Types.Exact<{
  eventId: Types.InputMaybe<Types.Scalars['String']['input']>;
  visibility: Types.InputMaybe<Types.EventVisibility>;
  status: Types.InputMaybe<Types.EventStatus>;
  startDateTimeFrom: Types.InputMaybe<Types.Scalars['DateTime']['input']>;
  startDateTimeTo: Types.InputMaybe<Types.Scalars['DateTime']['input']>;
}>;


export type GetEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, name: string, description: string | null, visibility: Types.EventVisibility, status: Types.EventStatus, startDateTime: string, endDateTime: string | null }> };


export const GetEvents = gql`
    query getEvents($eventId: String, $visibility: EventVisibility, $status: EventStatus, $startDateTimeFrom: DateTime, $startDateTimeTo: DateTime) {
  events(
    input: {id: $eventId, visibility: $visibility, status: $status, startDateTimeFrom: $startDateTimeFrom, startDateTimeTo: $startDateTimeTo}
  ) {
    id
    name
    description
    visibility
    status
    startDateTime
    endDateTime
  }
}
    `;