/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type SetUpTeamInput = {
  name: string,
  description: string,
  loggerPassword: string,
};

export type SetUpTeamResult = {
  __typename: "SetUpTeamResult",
  id: string,
};

export type CreateTeamInput = {
  id?: string | null,
  owner: string,
  name: string,
  description?: string | null,
  loggerId?: string | null,
};

export type ModelTeamConditionInput = {
  owner?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  loggerId?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  owner: string,
  name: string,
  description?: string | null,
  loggerId?: string | null,
  accounts?: ModelAccountConnection | null,
  logs?: ModelLogConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  name: string,
  description?: string | null,
  teamId: string,
  team?: Team | null,
  logs?: ModelLogConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLogConnection = {
  __typename: "ModelLogConnection",
  items:  Array<Log | null >,
  nextToken?: string | null,
};

export type Log = {
  __typename: "Log",
  id: string,
  type: string,
  accountId: string,
  teamId: string,
  account?: Account | null,
  team?: Team | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTeamInput = {
  id: string,
  owner?: string | null,
  name?: string | null,
  description?: string | null,
  loggerId?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateAccountInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  teamId: string,
};

export type ModelAccountConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  teamId?: ModelIDInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type UpdateAccountInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  teamId?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateLogInput = {
  id?: string | null,
  type: string,
  accountId: string,
  teamId: string,
  createdAt?: string | null,
};

export type ModelLogConditionInput = {
  type?: ModelStringInput | null,
  accountId?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelLogConditionInput | null > | null,
  or?: Array< ModelLogConditionInput | null > | null,
  not?: ModelLogConditionInput | null,
};

export type UpdateLogInput = {
  id: string,
  type?: string | null,
  accountId?: string | null,
  teamId?: string | null,
  createdAt?: string | null,
};

export type DeleteLogInput = {
  id: string,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  loggerId?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team | null >,
  nextToken?: string | null,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  teamId?: ModelIDInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelLogFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  accountId?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelLogFilterInput | null > | null,
  or?: Array< ModelLogFilterInput | null > | null,
  not?: ModelLogFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionTeamFilterInput = {
  owner?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  loggerId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeamFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  accountId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionLogFilterInput | null > | null,
};

export type SetUpTeamMutationVariables = {
  input?: SetUpTeamInput | null,
};

export type SetUpTeamMutation = {
  setUpTeam?:  {
    __typename: "SetUpTeamResult",
    id: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    owner: string,
    name: string,
    description?: string | null,
    loggerId?: string | null,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    owner: string,
    name: string,
    description?: string | null,
    loggerId?: string | null,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    owner: string,
    name: string,
    description?: string | null,
    loggerId?: string | null,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    description?: string | null,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    description?: string | null,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    description?: string | null,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLogMutationVariables = {
  input: CreateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type CreateLogMutation = {
  createLog?:  {
    __typename: "Log",
    id: string,
    type: string,
    accountId: string,
    teamId: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      description?: string | null,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLogMutationVariables = {
  input: UpdateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type UpdateLogMutation = {
  updateLog?:  {
    __typename: "Log",
    id: string,
    type: string,
    accountId: string,
    teamId: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      description?: string | null,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLogMutationVariables = {
  input: DeleteLogInput,
  condition?: ModelLogConditionInput | null,
};

export type DeleteLogMutation = {
  deleteLog?:  {
    __typename: "Log",
    id: string,
    type: string,
    accountId: string,
    teamId: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      description?: string | null,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    owner: string,
    name: string,
    description?: string | null,
    loggerId?: string | null,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    description?: string | null,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name: string,
      description?: string | null,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLogQueryVariables = {
  id: string,
};

export type GetLogQuery = {
  getLog?:  {
    __typename: "Log",
    id: string,
    type: string,
    accountId: string,
    teamId: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      description?: string | null,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLogsQueryVariables = {
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsQuery = {
  listLogs?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      type: string,
      accountId: string,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TeamsByLoggerIdQueryVariables = {
  loggerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TeamsByLoggerIdQuery = {
  teamsByLoggerId?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAccountsByTeamIdQueryVariables = {
  teamId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsByTeamIdQuery = {
  listAccountsByTeamId?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name: string,
      description?: string | null,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsByAccountIdQueryVariables = {
  accountId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsByAccountIdQuery = {
  listLogsByAccountId?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      type: string,
      accountId: string,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsByTeamIdQueryVariables = {
  teamId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsByTeamIdQuery = {
  listLogsByTeamId?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      type: string,
      accountId: string,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    owner: string,
    name: string,
    description?: string | null,
    loggerId?: string | null,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    owner: string,
    name: string,
    description?: string | null,
    loggerId?: string | null,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    owner: string,
    name: string,
    description?: string | null,
    loggerId?: string | null,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    description?: string | null,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    description?: string | null,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    description?: string | null,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
};

export type OnCreateLogSubscription = {
  onCreateLog?:  {
    __typename: "Log",
    id: string,
    type: string,
    accountId: string,
    teamId: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      description?: string | null,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
};

export type OnUpdateLogSubscription = {
  onUpdateLog?:  {
    __typename: "Log",
    id: string,
    type: string,
    accountId: string,
    teamId: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      description?: string | null,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
};

export type OnDeleteLogSubscription = {
  onDeleteLog?:  {
    __typename: "Log",
    id: string,
    type: string,
    accountId: string,
    teamId: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      description?: string | null,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      owner: string,
      name: string,
      description?: string | null,
      loggerId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
