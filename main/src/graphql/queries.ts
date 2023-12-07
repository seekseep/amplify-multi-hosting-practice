/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTeam = /* GraphQL */ `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    owner
    name
    description
    loggerId
    accounts {
      nextToken
      __typename
    }
    logs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTeamQueryVariables, APITypes.GetTeamQuery>;
export const listTeams = /* GraphQL */ `query ListTeams(
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      name
      description
      loggerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTeamsQueryVariables, APITypes.ListTeamsQuery>;
export const getAccount = /* GraphQL */ `query GetAccount($id: ID!) {
  getAccount(id: $id) {
    id
    name
    description
    teamId
    team {
      id
      owner
      name
      description
      loggerId
      createdAt
      updatedAt
      __typename
    }
    logs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountQueryVariables,
  APITypes.GetAccountQuery
>;
export const listAccounts = /* GraphQL */ `query ListAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      teamId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountsQueryVariables,
  APITypes.ListAccountsQuery
>;
export const getLog = /* GraphQL */ `query GetLog($id: ID!) {
  getLog(id: $id) {
    id
    type
    accountId
    teamId
    account {
      id
      name
      description
      teamId
      createdAt
      updatedAt
      __typename
    }
    team {
      id
      owner
      name
      description
      loggerId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLogQueryVariables, APITypes.GetLogQuery>;
export const listLogs = /* GraphQL */ `query ListLogs($filter: ModelLogFilterInput, $limit: Int, $nextToken: String) {
  listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      accountId
      teamId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLogsQueryVariables, APITypes.ListLogsQuery>;
export const teamsByLoggerId = /* GraphQL */ `query TeamsByLoggerId(
  $loggerId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  teamsByLoggerId(
    loggerId: $loggerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      name
      description
      loggerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TeamsByLoggerIdQueryVariables,
  APITypes.TeamsByLoggerIdQuery
>;
export const listAccountsByTeamId = /* GraphQL */ `query ListAccountsByTeamId(
  $teamId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccountsByTeamId(
    teamId: $teamId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      teamId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountsByTeamIdQueryVariables,
  APITypes.ListAccountsByTeamIdQuery
>;
export const listLogsByAccountId = /* GraphQL */ `query ListLogsByAccountId(
  $accountId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listLogsByAccountId(
    accountId: $accountId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      accountId
      teamId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLogsByAccountIdQueryVariables,
  APITypes.ListLogsByAccountIdQuery
>;
export const listLogsByTeamId = /* GraphQL */ `query ListLogsByTeamId(
  $teamId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listLogsByTeamId(
    teamId: $teamId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      accountId
      teamId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLogsByTeamIdQueryVariables,
  APITypes.ListLogsByTeamIdQuery
>;
