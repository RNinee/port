import { createFileRoute } from '@tanstack/react-router'
import AboutMe from '../sections/AboutMe'
import Hero from '../sections/Hero'
import Portfolio from '../sections/Portfolio'
import MyContact from '../sections/MyContact'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="relative pt-24 sm:pt-28">
      <section className="mt-20 sm:mt-30 mx-auto px-5 sm:px-8 max-w-6xl">
        <Hero />
      </section>
      <section className="mt-40 sm:mt-60 mx-auto px-5 sm:px-8 max-w-6xl">
        <AboutMe />
      </section>
      <section className="mt-40 sm:mt-60 mx-auto px-5 sm:px-8 max-w-6xl">
        <Portfolio />
      </section>
      <section className="mt-40 sm:mt-60 mx-auto px-5 sm:px-8 max-w-6xl pb-20">
        <MyContact />
      </section>
    </main>
  )
}
