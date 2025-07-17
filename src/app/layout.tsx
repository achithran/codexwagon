import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Header />
        {children}
      </body>
    </html>
  )
}
