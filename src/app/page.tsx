import Contact from "./Contact"
import Experience from "./Experience"
import Intro from "./Intro"
import Projects from "./Projects"
import Skills from "./Skills"

export default function HomePage() {
  return (
    <main className="flex-grow-1 flex min-h-screen flex-col gap-14">
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
