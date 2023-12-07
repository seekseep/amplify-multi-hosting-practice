/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const setUpTeam = /* GraphQL */ `mutation SetUpTeam($input: SetUpTeamInput) {
  setUpTeam(input: $input) {
    id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SetUpTeamMutationVariables,
  APITypes.SetUpTeamMutation
>;
export const createTeam = /* GraphQL */ `mutation CreateTeam(
  $input: CreateTeamInput!
  $condition: ModelTeamConditionInput
) {
  createTeam(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTeamMutationVariables,
  APITypes.CreateTeamMutation
>;
export const updateTeam = /* GraphQL */ `mutation UpdateTeam(
  $input: UpdateTeamInput!
  $condition: ModelTeamConditionInput
) {
  updateTeam(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTeamMutationVariables,
  APITypes.UpdateTeamMutation
>;
export const deleteTeam = /* GraphQL */ `mutation DeleteTeam(
  $input: DeleteTeamInput!
  $condition: ModelTeamConditionInput
) {
  deleteTeam(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTeamMutationVariables,
  APITypes.DeleteTeamMutation
>;
export const createAccount = /* GraphQL */ `mutation CreateAccount(
  $input: CreateAccountInput!
  $condition: ModelAccountConditionInput
) {
  createAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAccountMutationVariables,
  APITypes.CreateAccountMutation
>;
export const updateAccount = /* GraphQL */ `mutation UpdateAccount(
  $input: UpdateAccountInput!
  $condition: ModelAccountConditionInput
) {
  updateAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAccountMutationVariables,
  APITypes.UpdateAccountMutation
>;
export const deleteAccount = /* GraphQL */ `mutation DeleteAccount(
  $input: DeleteAccountInput!
  $condition: ModelAccountConditionInput
) {
  deleteAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAccountMutationVariables,
  APITypes.DeleteAccountMutation
>;
export const createLog = /* GraphQL */ `mutation CreateLog(
  $input: CreateLogInput!
  $condition: ModelLogConditionInput
) {
  createLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLogMutationVariables,
  APITypes.CreateLogMutation
>;
export const updateLog = /* GraphQL */ `mutation UpdateLog(
  $input: UpdateLogInput!
  $condition: ModelLogConditionInput
) {
  updateLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLogMutationVariables,
  APITypes.UpdateLogMutation
>;
export const deleteLog = /* GraphQL */ `mutation DeleteLog(
  $input: DeleteLogInput!
  $condition: ModelLogConditionInput
) {
  deleteLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLogMutationVariables,
  APITypes.DeleteLogMutation
>;
