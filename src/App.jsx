import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrentBuild from "./components/CurrentBuild";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contacts from "./components/Contacts";
import LabConsole from "./components/LabConsole";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <ScrollReveal>
        <CurrentBuild />
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <About />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Skills />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Projects />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Journey />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Contacts />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <LabConsole />
      </ScrollReveal>
    </>
  );
}

export default App;