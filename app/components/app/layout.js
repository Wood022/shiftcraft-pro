// app/layout.js
import './globals.css'

export const metadata = {
  title: 'ShiftCraft Pro',
  description: 'Intelligent Restaurant Scheduling',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
