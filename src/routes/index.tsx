import { createFileRoute } from '@tanstack/react-router'
import NavBar from '../components/NavBar'
import Hero from '../sections/Hero'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="relative">
      <NavBar />
      <section className="mt-30">
        <Hero />
      </section>
    </main>
  )
}
