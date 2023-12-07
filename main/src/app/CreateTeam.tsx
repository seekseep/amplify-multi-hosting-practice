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
import { CreateTeamInput } from "@/API"
import { useForm } from "react-hook-form"
import { getErrorMessage } from "@/utilities/error"

const client = generateClient()

export default function CreateTeam () {
  const theme = useTheme()

  const methods = useForm<CreateTeamInput>({
    defaultValues: {
      name: '',
      description: '',
      owner: ''
    }
  })

  const mutation = useMutation({
    async mutationFn (input: CreateTeamInput) {
      return await client.graphql({
        query: mutations.createTeam,
        variables: {
          input: input
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
          label="name"
          {...methods.register("name", { required: true })} />
        <TextAreaField
          label="description"
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
