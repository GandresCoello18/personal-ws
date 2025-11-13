import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Andres Coello - Full Stack Developer & Mentor",
  description:
    "Full Stack Developer y Mentor especializado en programación web. Proyectos destacados, servicios educativos y consultoría para desarrolladores.",
  keywords: "developer, full stack, mentor, programación, web development, freelancer",
  generator: "v0.app",
  openGraph: {
    title: "Andres Coello - Full Stack Developer & Mentor",
    description: "Full Stack Developer y Mentor especializado en programación web",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1c4e5a" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
