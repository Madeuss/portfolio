import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Hobbies from './components/Hobbies';
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
        <Hobbies />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
