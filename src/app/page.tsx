import Intro from "./Intro"

export default function HomePage() {
  return (
    <main className="flex-grow-1 flex min-h-screen flex-col gap-10">
      <Intro />
      <section id="experience" className="min-h-[500px]">
        <h2>Experience</h2>
      </section>
      <section id="projects" className="min-h-[500px]">
        <h2>Projects</h2>
      </section>
      <section id="contacts" className="min-h-[500px]">
        <h2>Contacts</h2>
      </section>
    </main>
  )
}
