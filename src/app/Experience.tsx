"use client"

import Image from "next/image"
import { useCollapse } from "react-collapsed"

interface IExperience {
  year: string
  date: string
  title: string
  company: string
  description: string[]
  icon: string
}

const experiences: IExperience[] = [
  {
    year: "Present",
    date: "Jan 2022 - Present",
    title: "Front-end Developer",
    company: "Phenotips",
    description: [
      "Developed flagship PhenoTips tools using React, Typescript, MUI, Webpack, RESTY APIs on a Java Spring Boot application.",
      "Contributed to the development of 130+ new features and the resolution of 100+ bugs, following Agile methodologies and utilizing JIRA and Confluence",
      "Directed the design of new products, developing mock-ups and user interfaces in Figma and implementing support for screen readers to meet accessibility standards",
      "Modernization of PhenoTips by incorporating micro-frontend architecture, CI/CD pipelines, Typescript, linting, and testing",
    ],
    icon: "https://utfs.io/f/4HL9EUy6VJbQYpxjyoWT5OShcpJ9xIHkbU4BDfm0QW1qRnMA",
  },
  {
    year: "2021",
    date: "Mar - Dec 2021",
    title: "Lead Product Designer",
    company: "Desserts App",
    description: [
      "Founded and led the UI design, product features, branding, graphics, and marketing web pages.",
      "Selected for the DMZ Incubator boot camp program as a top 16 finalist.",
      "Successfully launched the product by coordinating team efforts to achieve project milestones.",
    ],
    icon: "https://utfs.io/f/4HL9EUy6VJbQqr9Ijqq2wbQFPtpM9aRXKohOI72UVGNjZD3S",
  },
  {
    year: "2020",
    date: "Jun - Sep 2020",
    title: "Web Developer",
    company: "Ryerson University (TMU)",
    description: [
      "Lead the redesign project for RU Student Life's main website updating themes and building custom pages",
      "Conducted interviews with students and faculty members to gather feedback and improve the user experience",
    ],
    icon: "https://utfs.io/f/4HL9EUy6VJbQJGlKeesGF5S8LrZR9g2hEs6nYvKPtA1wMTul",
  },
  {
    year: "2019",
    date: "May - Dec 2019",
    title: "Front-end Developer",
    company: "SpankChain",
    description: [
      "Built and maintained a library of responsive and reusable React components for SpankChain's content platform",
      "Designed a Material-UI theme for use across multiple platforms focusing on accessibility and consistency",
    ],
    icon: "https://utfs.io/f/4HL9EUy6VJbQobLwiqIta5NkML3VGQBTfoSjgEPHOlmDtshc",
  },
  {
    year: "2019",
    date: "Jan - Apr 2019",
    title: "UI/UX Developer",
    company: "LCBO Innovation Lab",
    description: [
      "Developed a production-ready front-end application using React and REST APIs to streamline inventory and product access for staff.",
      "Led as a product manager for four ongoing projects, planning daily sprints and utilizing Scrum methodology.",
      "Designed an Apache Kafka consumer to integrate with ElasticSearch, optimizing LCBO's recipe database and significantly reducing search times.",
    ],
    icon: "https://utfs.io/f/4HL9EUy6VJbQwGejBnCfZ9u4MXVxUaT5iYcBC7zWkEOv0gD8",
  },
  {
    year: "2018",
    date: "May - Aug 2018",
    title: "UI/UX Developer",
    company: "Upverter",
    description: [
      "Created and implemented over 60 mock-ups and wireframes to revamp the Upverter UI and enhance user experience.",
      "Delivered a redesigned layers panel that reduced user action times by 50% while introducing valuable new functionality.",
    ],
    icon: "https://utfs.io/f/4HL9EUy6VJbQM0FkXbKsCTEnGeZhlRJwOL03IfWiBc4FH6P8",
  },
  {
    year: "2016",
    date: "May - Aug 2016",
    title: "Junior Software Engineer",
    company: "American Express",
    description: [
      "Working with the innovation lab to optimize UI/UX for existing and new products",
      "Built a web app from scratch, showcasing full-stack development expertise with NoSQL, Node, Git, and JavaScript.",
    ],
    icon: "https://utfs.io/f/4HL9EUy6VJbQn9okjNY8X3M0cWVrKS6RLY54CyvAHJ7ghpkf",
  },
  {
    year: "2015",
    date: "Sep - Dec 2015",
    title: "R&D Support Specialist",
    company: "OpenText",
    description: [
      "Streamlining R&D workflows by actively monitoring and resolving issues, conducting in-depth feature testing, and crafting user-friendly documentation.",
      "Facilitating communication and coordination across multiple teams, utilizing JIRA for issue tracking and Confluence for knowledge management.",
    ],
    icon: "https://utfs.io/f/4HL9EUy6VJbQoNPWlBta5NkML3VGQBTfoSjgEPHOlmDtshc9",
  },
  {
    year: "2015",
    date: "Jan - May 2015",
    title: "Technical Analyst",
    company: "Manulife Financial",
    description: [
      "Optimizing efficiency and productivity through resource allocation, data management, and project coordination, using Excel and Sharepoint.",
      "Facilitating transitions to upgraded infrastructure and equipment",
    ],
    icon: "https://utfs.io/f/4HL9EUy6VJbQOstS4w3dUrG9MTp28EztBnv0xJNilKcoISXZ",
  },
]

function ExperienceItem({
  year,
  date,
  title,
  company,
  description,
  icon,
}: IExperience) {
  return (
    <div className="relative mt-8 flex w-full gap-3">
      <div>
        <span className="absolute left-2 top-[2px] hidden md:inline-block">
          {year}
        </span>
        <svg
          width="20"
          height="20"
          className="absolute left-[15px] top-1 overflow-visible md:left-[87px]"
        >
          <circle
            className="fill-cream stroke-current text-primary"
            cx="10"
            cy="10"
            r="10"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="ml-10 flex flex-col gap-2 md:ml-32 md:gap-4">
        <p>{"[ " + date + " ]"}</p>
        <h3 className="leading-relaxed md:leading-normal">
          <Image
            src={icon}
            width={32}
            height={32}
            alt={company + " logo"}
            unoptimized
            className="-mt-[7px] mr-4 inline-block rounded border border-primary shadow-[2px_2px_0_0_rgb(var(--color-primary))]"
          />
          {title + " @ " + company}
        </h3>
        <ul className="ml-5 list-disc">
          {description.map((item, i) => (
            <li key={company + "-" + i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    duration: 800,
    collapsedHeight: 600,
  })

  return (
    <section id="experience">
      <h2 className="mb-10">Experience</h2>
      <div className="relative flex flex-col">
        <svg className="absolute left-6 top-0 h-[calc(100%-3.5rem)] overflow-visible md:left-24">
          <line
            className="stroke-current text-primary"
            x1="1"
            y1="0"
            x2="1"
            y2="100%"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div {...getCollapseProps()}>
          {experiences.map((experience) => (
            <ExperienceItem key={experience.company} {...experience} />
          ))}
        </div>
        <button className="mt-10 self-end" {...getToggleProps()}>
          {"Show " + (isExpanded ? "Less" : "More")}
        </button>
      </div>
    </section>
  )
}
