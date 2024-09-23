"use client"

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts"
import Chip from "./Chip"

const data = [
  { skill: "Chrome Devtools", value: 7 },
  { skill: "GitHub", value: 9 },
  { skill: "VS Code", value: 7 },
  { skill: "Stack Overflow", value: 4 },
  { skill: "WSL", value: 9 },
  { skill: "Copilot", value: 7 },
]

export default function FrontEndSkillChart() {
  return (
    <div className="flex flex-col items-center">
      <RadarChart
        width={350}
        height={250}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        data={data}
        className="text-sm"
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar
          name="FE Skills"
          dataKey="value"
          fillOpacity={0.2}
          className="fill-current stroke-current text-primary"
        />
      </RadarChart>
      <Chip>Dev tools ranked on sentiment</Chip>
    </div>
  )
}
