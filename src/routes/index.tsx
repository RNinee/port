import { createFileRoute } from '@tanstack/react-router'
import NavBar from '../components/NavBar'
import Hero from '../sections/Hero'
import AboutMe from '../sections/AboutMe'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="relative">
      <NavBar />
      <section className="mt-30 mx-auto">
        <Hero />
      </section>
      <section className="mt-60 mx-auto">
        <AboutMe />
      </section>
    </main>
  )
}
