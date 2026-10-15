import { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Hobbies from './components/Hobbies'
import ContactCta from './components/ContactCta'
import Footer from './components/Footer'
import { useToys } from './components/Toys'

export default function App() {
  // A página inteira é o espaço da bola e do controle.
  const pageRef = useRef<HTMLDivElement>(null)
  const { toys, hasInteracted } = useToys(pageRef)

  return (
    <div id="top" ref={pageRef} className="page">
      <Hero hasInteracted={hasInteracted} />
      <main>
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Hobbies />
        <ContactCta />
      </main>
      <Footer />
      {toys}
    </div>
  )
}
