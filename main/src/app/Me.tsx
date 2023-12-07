'use client'

import { useQuery } from "@tanstack/react-query"
import { getCurrentUser, fetchAuthSession  } from 'aws-amplify/auth'

import {
  Button,
  Card,
  useAuthenticator,
  useTheme,
  Heading, Text, Flex, Placeholder
} from "@aws-amplify/ui-react"


export default function Me () {
  const theme = useTheme()
  const authenticator = useAuthenticator()

  const query = useQuery({
    queryKey: ['me', 'groups'],
    async queryFn () {
      const user = await getCurrentUser()
      const session = await fetchAuthSession()
      console.log({ user, session })
      return {user,session}
    }
  })

  return (
    <Card padding={theme.tokens.space.large}>
      <Heading
        level={2}
        marginBlockEnd={theme.tokens.space.medium}>
          Current User
      </Heading>
      <Flex
        direction="column"
        marginBlockEnd={theme.tokens.space.medium}>
        <Flex direction="row" gap={theme.tokens.space.small}>
          <Heading level={5}>
            username
          </Heading>
          <Text>
            {authenticator.user.username ?? <Placeholder />}
          </Text>
        </Flex>
      </Flex>
      <Button
        onClick={() => {
          if (!window.confirm('Are you sure you want to sign out?')) return
          authenticator.signOut()
        }}>
        Sign Out
      </Button>
    </Card>
  )
}
