import './global.css'
import { ReactNode } from 'react'
import { JetBrains_Mono as JetBrainsMono } from 'next/font/google'
import { Providers } from './Providers'

const jetbrains = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-jetbrainsmono',
})

export const metadata = {
  title: 'Portfólio | Silas Martins',
  description: 'Website que divulga os projetos desenvolvidos por mim',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </head>
      <body className={`${jetbrains.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
