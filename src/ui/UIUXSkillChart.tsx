"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import Chip from "./Chip"

const data = [
  {
    name: "2000",
    rating: 10,
  },
  {
    name: "2005",
    rating: 8,
  },
  {
    name: "2010",
    rating: 3,
  },
  {
    name: "2015",
    rating: 5,
  },
  {
    name: "2020s",
    rating: 9,
  },
]

export default function UIUXSkillChart() {
  // hides defaultProps warnings https://github.com/recharts/recharts/issues/3615
  const error = console.error
  console.error = (...args) => {
    if ((args[0] as string).includes("defaultProps")) return
    error(...args)
  }
  const primaryColor = "rgb(0, 71, 58)"

  return (
    <div className="flex flex-col items-center">
      <AreaChart
        width={375}
        height={250}
        data={data}
        margin={{
          top: 35,
          right: 30,
          left: 0,
          bottom: 15,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={primaryColor} stopOpacity={0.4} />
            <stop offset="95%" stopColor={primaryColor} stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="rating"
          fillOpacity={1}
          fill="url(#colorUv)"
          stroke={primaryColor}
        />
      </AreaChart>
      <Chip>Design trends over the years ranked</Chip>
    </div>
  )
}
