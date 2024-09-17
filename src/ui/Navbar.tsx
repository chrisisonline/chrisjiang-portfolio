"use client"

import NextLink, { type LinkProps } from "next/link"

export default function Navbar() {
  function Link({
    href,
    children,
    ...props
  }: LinkProps & { children: React.ReactNode }) {
    return (
      <NextLink href={href} className="underline" {...props}>
        {children}
      </NextLink>
    )
  }

  return (
    <nav className="sticky top-8 flex min-w-48 flex-col gap-4 rounded-xl bg-p-transparent p-6">
      <h2>Menu</h2>
      <Link href="#">Intro</Link>
      <Link href="#experience">Experience</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contacts">Contacts</Link>
    </nav>
  )
}
