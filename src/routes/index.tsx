import { createFileRoute } from '@tanstack/react-router'
import AboutMe from '../sections/AboutMe'
import Hero from '../sections/Hero'
import Portfolio from '../sections/Portfolio'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="relative pt-28">
      <section className="mt-30 mx-auto">
        <Hero />
      </section>
      <section className="mt-60 mx-auto">
        <AboutMe />
      </section>
      <section className="mt-60 mx-auto">
        <Portfolio />
      </section>
    </main>
  )
}
