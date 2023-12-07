/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTeam = /* GraphQL */ `subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
  onCreateTeam(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTeamSubscriptionVariables,
  APITypes.OnCreateTeamSubscription
>;
export const onUpdateTeam = /* GraphQL */ `subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
  onUpdateTeam(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTeamSubscriptionVariables,
  APITypes.OnUpdateTeamSubscription
>;
export const onDeleteTeam = /* GraphQL */ `subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
  onDeleteTeam(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTeamSubscriptionVariables,
  APITypes.OnDeleteTeamSubscription
>;
export const onCreateAccount = /* GraphQL */ `subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onCreateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAccountSubscriptionVariables,
  APITypes.OnCreateAccountSubscription
>;
export const onUpdateAccount = /* GraphQL */ `subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onUpdateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAccountSubscriptionVariables,
  APITypes.OnUpdateAccountSubscription
>;
export const onDeleteAccount = /* GraphQL */ `subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
  onDeleteAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAccountSubscriptionVariables,
  APITypes.OnDeleteAccountSubscription
>;
export const onCreateLog = /* GraphQL */ `subscription OnCreateLog($filter: ModelSubscriptionLogFilterInput) {
  onCreateLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLogSubscriptionVariables,
  APITypes.OnCreateLogSubscription
>;
export const onUpdateLog = /* GraphQL */ `subscription OnUpdateLog($filter: ModelSubscriptionLogFilterInput) {
  onUpdateLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLogSubscriptionVariables,
  APITypes.OnUpdateLogSubscription
>;
export const onDeleteLog = /* GraphQL */ `subscription OnDeleteLog($filter: ModelSubscriptionLogFilterInput) {
  onDeleteLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLogSubscriptionVariables,
  APITypes.OnDeleteLogSubscription
>;
