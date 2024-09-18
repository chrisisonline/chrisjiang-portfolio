"use client"

import { useWindowWidth } from "@react-hook/window-size"
import { useEffect, useState } from "react"
import AnchorLink, {
  type AnchorLinkProps,
} from "react-anchor-link-smooth-scroll"
import { useCollapse } from "react-collapsed"

function Links({ isMobile }: { isMobile?: boolean }) {
  function Link({
    children,
    href,
  }: AnchorLinkProps & { children: React.ReactNode }) {
    return (
      <AnchorLink
        href={href}
        offset={isMobile ? 100 : 30}
        className="underline"
      >
        {children}
      </AnchorLink>
    )
  }

  return (
    <>
      <Link href="#intro">Intro</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#experience">Experience</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>
    </>
  )
}

export default function Navbar() {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { getCollapseProps, getToggleProps } = useCollapse({
    duration: 400,
    collapsedHeight: 80,
  })
  const isMobile = useWindowWidth() < 768
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return isMobile ? (
    <nav
      className="fixed left-0 right-0 top-0 z-10 box-border rounded-b-xl bg-cream"
      {...getCollapseProps()}
    >
      <div className="flex flex-col items-end gap-4 bg-primary-10 p-6">
        <div className="mb-3 flex w-full items-center justify-between">
          <h2>Chris Jiang</h2>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full p-0 shadow-[2px_2px_0_0_rgb(var(--color-primary))] hover:shadow-none"
            {...getToggleProps()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <Links isMobile={isMobile} />
      </div>
    </nav>
  ) : (
    <nav className="sticky top-8 flex min-w-48 flex-col gap-4 rounded-xl bg-primary-10 p-6">
      <h2>Menu</h2>
      <Links />
    </nav>
  )
}
