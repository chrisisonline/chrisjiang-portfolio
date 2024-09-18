"use client"

import Image from "next/image"
import React from "react"
import Chip from "~/ui/Chip"
import { useCollapse } from "react-collapsed"

interface IProject {
  title: string
  description: React.ReactNode
  imageSrc: string
  skills: string[]
}

const projects: IProject[] = [
  {
    title: "Desserts App",
    description: (
      <>
        A mobile ordering platform for local independent bakers. A part of the
        TMU DMZ incubator boot camp program <br />
        <a href="https://desserts.app/">Check out the Landing Page</a>
      </>
    ),
    imageSrc:
      "https://utfs.io/f/4HL9EUy6VJbQL6Kmv1b0MQO5tXjHxipAy3aKr9vo4SdFuBNY",
    skills: ["React", "Gatsby", "Material UI", "Git", "React Native", "Figma"],
  },
  {
    title: "Pokemon Calculator",
    description: (
      <>
        A damage calculator for competitive Pokemon battles. Features a GUI,
        responsive modern design, whilst maintaining all of the complex features
        <br />
        <a href="https://chrisisonline.github.io/pkmn-dmgcalc/">
          Check out the live app
        </a>
        {" | "}
        <a href="https://medium.com/@cj.design/fresh-new-look-for-a-pokemon-calculator-b14ce7b567a1">
          Read about my design process
        </a>
      </>
    ),
    imageSrc:
      "https://utfs.io/f/4HL9EUy6VJbQqmjUZD2wbQFPtpM9aRXKohOI72UVGNjZD3Sz",
    skills: ["jQuery", "Gulp", "Node", "Sass", "InVision", "Illustrator"],
  },
  {
    title: "EasyClipboard Chrome Extension",
    description: (
      <>
        A simple extension that allows you to quickly save many notes and links
        to your browser&apos;s local storage
        <br />
        <a href="https://chrome.google.com/webstore/detail/easy-clipboard/lkpiolleljimgohflbgekkbeoiajighj">
          Available on the Chrome Extensions Store
        </a>
      </>
    ),
    imageSrc:
      "https://utfs.io/f/4HL9EUy6VJbQmQ4lLWUwvUgFMSeWKs4ijXGDY5cC91qE6aHI",
    skills: ["React", "Figma", "Git", "Chrome Manifest"],
  },
  {
    title: "Upverter UI Redesign",
    description: (
      <>
        A modernization project for the PCB design software Upverter. Created
        over 60 mockups for a completely new component library
        <br />
        <a href="https://medium.com/@cj.design/refreshing-upverter-4212df39bedf">
          Checkout the mockups & designs
        </a>
      </>
    ),
    imageSrc:
      "https://utfs.io/f/4HL9EUy6VJbQPovSMNXvH79c83fLslgiGqjRhZatKQz0OrDW",
    skills: ["Figma", "Illustrator", "Google Closure", "Flask", "Jinja"],
  },
  {
    title: "Resume Design",
    description:
      "3 Custom templates to help organize & format resumes. Eye catching designs that are easy to read and stand out from the crowd",
    imageSrc:
      "https://utfs.io/f/4HL9EUy6VJbQ4epRUdy6VJbQRXHf1ZEjKDMOdNFxq4th9z2a",
    skills: ["Illustrator", "InDesign", "Figma"],
  },
]

function ProjectCard({
  project: { title, description, imageSrc, skills },
}: {
  project: IProject
}) {
  return (
    <div className="mb-16 flex gap-6">
      <Image
        src={imageSrc}
        alt={title}
        width={200}
        height={200}
        quality={100}
      />
      <div className="flex flex-col gap-4">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    duration: 600,
    collapsedHeight: 450,
  })

  return (
    <section id="projects" className="flex flex-col">
      <h2 className="mb-10">Projects</h2>
      {renderProjects({ items: projects, isCollapsible: true })}
      <button className="mt-10 self-end" {...getToggleProps()}>
        {"Show " + (isExpanded ? "Less" : "More")}
      </button>
    </section>
  )

  function renderProjects({
    items,
    isCollapsible,
  }: {
    items: IProject[]
    isCollapsible?: boolean
  }) {
    return (
      <div
        className="flex flex-col"
        {...(isCollapsible ? getCollapseProps() : {})}
      >
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    )
  }
}
