import "~/styles/globals.css"

import { Gloock, Montserrat } from "next/font/google"
import { type Metadata } from "next"
import Navbar from "~/ui/Navbar"

export const metadata: Metadata = {
  title: "Chris Jiang",
  description: "Portfolio & CV",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

const glook = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-glook",
})
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${glook.variable} ${montserrat.variable} text-primary`}
    >
      <body className="mx-auto flex flex-col bg-cream lg:my-16 lg:max-w-[1080px]">
        <h1 className="lg:mb-16">Chris Jiang | Portfolio & CV</h1>
        <div className="flex items-start gap-16">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
