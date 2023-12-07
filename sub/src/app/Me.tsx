'use client'

import {
  Button,
  Card,
  View,
  useAuthenticator,
  useTheme,
  Heading, Text, Flex, Placeholder
} from "@aws-amplify/ui-react"

export default function Me () {
  const theme = useTheme()
  const authenticator = useAuthenticator()

  return (
    <View
      maxWidth={theme.breakpoints.values.small}
      padding={theme.tokens.space.large}>
      <Card>
        <Flex direction="column">
          <Flex direction="row" gap={theme.tokens.space.small}>
            <Heading>
              username
            </Heading>
            <Text>
              {authenticator.user.username ?? <Placeholder />}
            </Text>
          </Flex>
        </Flex>
        <Button onClick={authenticator.signOut}>
          Sign Out
        </Button>
      </Card>
    </View>
  )
}
