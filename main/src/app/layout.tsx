import type { Metadata } from 'next'
import './globals.css'
import '@aws-amplify/ui-react/styles.css'

import Providers from './Providers'

export const metadata: Metadata = {
  title: 'メイン環境',
  description: 'Amplifyで複数のホスティングの検証',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body style={{
        background: 'var(--amplify-colors-neutral-20)'
      }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
