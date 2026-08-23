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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CurrentBuild/>
      <About/>
      <Skills/>
      <Projects/>
      <Journey/>
      <Contacts/>
      <LabConsole/>
    </>
  );
}

export default App;