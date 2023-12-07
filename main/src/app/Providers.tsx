'use client'

import { ReactNode } from "react"
import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"


import config from '@/aws-exports'

Amplify.configure(config)

const Providers = ({
  children
} : {
  children: ReactNode
}) => {
  return (
    <Authenticator>
      {children}
    </Authenticator>
  )
}

export default Providers
