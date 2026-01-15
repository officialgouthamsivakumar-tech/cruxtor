import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cruxtor - High Frequency Screen',
  description: 'High Frequency Screen - fine screening technology used widely in M Sand Plant and Sugar Grader',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
