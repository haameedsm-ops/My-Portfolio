import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LabConsole from "./components/LabConsole";
import CurrentBuild from "./components/CurrentBuild";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Journey from "./components/Journey";
import Contact from "./components/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CurrentBuild />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Journey />
      <Contact />
      <LabConsole />
    </>
  );
}

export default App;