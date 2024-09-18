import Chip from "~/ui/Chip"

function SkillCard({
  title,
  description,
  skills,
}: {
  title: string
  description: string
  skills: string[]
}) {
  return (
    <section className="flex w-1/2 flex-col gap-5">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </div>
    </section>
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
    />
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
    />
  )
}
