import Experience from "./Experience"
import Intro from "./Intro"
import Projects from "./Projects"
import { FrontEnd, UIUX } from "./Skills"

export default function HomePage() {
  return (
    <main className="flex-grow-1 flex min-h-screen flex-col gap-14">
      <Intro />
      <div id="skills" className="flex gap-16">
        <FrontEnd />
        <UIUX />
      </div>
      <Experience />
      <Projects />
      <section id="contact" className="min-h-[500px]">
        <h2>Contact</h2>
      </section>
    </main>
  )
}
