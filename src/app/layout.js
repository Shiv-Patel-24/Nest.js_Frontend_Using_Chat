import './globals.css'
import Page from "./page";

export const metadata = {
  title: 'Chat App',
  description: 'Responsive Chat Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
