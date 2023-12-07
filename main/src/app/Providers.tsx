'use client'

import { ReactNode } from "react"
import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

import config from '@/aws-exports'

Amplify.configure(config)

const client = new QueryClient()

const Providers = ({
  children
} : {
  children: ReactNode
}) => {
  return (
    <QueryClientProvider client={client}>
      <Authenticator>
        {children}
      </Authenticator>
    </QueryClientProvider>
  )
}

export default Providers
