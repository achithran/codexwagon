import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import ChatWidget from '../components/ChatWidget';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Header />
        {children}
        <ChatWidget />  
      </body>
    </html>
  )
}
