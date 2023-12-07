'use client'

import { Grid, useTheme } from "@aws-amplify/ui-react"
import { ReactNode } from "react"

export default function Container ({
  children
}: {
  children: ReactNode
}) {
  const theme = useTheme()
  return (
    <Grid
      maxWidth={theme.breakpoints.values.large}
      padding={theme.tokens.space.large}
      gap={theme.tokens.space.large}>
      {children}
    </Grid>
  )
}
