'use client'

import {
  Alert,
  Button,
  Card,
  Flex,
  Heading,
  TextField,
  useTheme,
  TextAreaField,
  View
} from "@aws-amplify/ui-react"
import { useMutation } from "@tanstack/react-query"
import { generateClient } from 'aws-amplify/api'

import * as mutations from '@/graphql/mutations'
import { SetUpTeamInput } from "@/API"
import { useForm } from "react-hook-form"
import { getErrorMessage } from "@/utilities/error"

const client = generateClient()

export default function CreateTeam () {
  const theme = useTheme()

  const methods = useForm<SetUpTeamInput>({
    defaultValues: {
      name: '',
      description: '',
      loggerPassword: '',
    }
  })

  const mutation = useMutation({
    async mutationFn (input: SetUpTeamInput) {
      return await client.graphql({
        query: mutations.setUpTeam,
        variables: {
          input
        }
      })
    }
  })

  return (
    <Card padding={theme.tokens.space.medium}>
      <Heading level={2} marginBlockEnd={theme.tokens.space.medium}>Create Team</Heading>
      <Flex
        as="form" direction="column" gap={theme.tokens.space.medium}
        onSubmit={methods.handleSubmit((values) => mutation.mutate(values))}>
        <TextField
          label="Name"
          {...methods.register("name", { required: true })} />
        <TextAreaField
          label="Description"
          {...methods.register("description", { required: true })} />
        <TextField
          label="Logger Password" type="password"
          {...methods.register("description", { required: true })} />
        {mutation.isError && (
          <Alert variation="error">{getErrorMessage(mutation.error)}</Alert>
        )}
        <View>
          <Button type="submit" variation="primary">
            Create
          </Button>
        </View>
      </Flex>
    </Card>
  )
}
