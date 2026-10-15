import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stack from './components/Stack';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top">
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Stack />
        {/* TODO: seção de Hobbies (ver CLAUDE.md → "Próximos passos") */}
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
