"use client"

import dynamic from "next/dynamic"
import Chip from "~/ui/Chip"

const FrontEndSkillChart = dynamic(() => import("~/ui/FrontEndSkillChart"), {
  ssr: false,
})
const UIUXSkillChart = dynamic(() => import("~/ui/UIUXSkillChart"), {
  ssr: false,
})

function SkillCard({
  title,
  description,
  skills,
  children,
}: {
  title: string
  description: string
  skills: string[]
  children?: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2>{title}</h2>
      {children}
      <p>{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </div>
    </div>
  )
}

export function FrontEnd() {
  return (
    <SkillCard
      title="Front-end development"
      description="I am a React developer with experience building web projects ranging from static marketing sites to complex applications used in genetic clinics. I am always open to learning new technologies!"
      skills={[
        "React",
        "Redux",
        "Material UI",
        "Typescript",
        "Webpack",
        "Next.js",
        "Tailwind CSS",
        "Module Federation",
        "Sass",
        "Node.js",
        "Npm",
        "Jest",
        "AWS",
        "JavaScript",
        "HTML",
        "CSS",
        "WordPress",
        "Git",
      ]}
    >
      <FrontEndSkillChart />
    </SkillCard>
  )
}
export function UIUX() {
  return (
    <SkillCard
      title="UI/UX Designer"
      description="I primarily use Figma to create my designs, but I am always exploring new tools to streamline my work. My favorite feeling is when I see a design that inspires me to create something in a unique way."
      skills={[
        "Figma",
        "Adobe CC",
        "Illustrator",
        "InDesign",
        "Photoshop",
        "Sketch",
        "WCAG 2.0",
        "AODA",
        "Wireframes",
        "Mock-ups",
        "Product Management",
        "Story boarding",
        "User Testing",
        "MS Paint :)",
      ]}
    >
      <UIUXSkillChart />
    </SkillCard>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-16 md:flex-row">
      <FrontEnd />
      <UIUX />
    </section>
  )
}
