export interface SetUpTeamArguments {
  input: {
    name: string
    description: string
    loggerPassword: string
  }
}

export interface SetUpTeamResult {
  id: string
}

export type Arguments = SetUpTeamInput

export type Results = SetUpTeamResult
