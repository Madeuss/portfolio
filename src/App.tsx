import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stack from './components/Stack';
import HobbiesPlay from './components/HobbiesPlay';
import HobbiesCards from './components/HobbiesCards';
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
        {/* Duas versões de Hobbies para comparar — manter uma e apagar a outra */}
        <HobbiesPlay />
        <HobbiesCards />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
