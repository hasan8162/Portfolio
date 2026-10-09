import Navbar from "./components/Navbar"
import About from "./pages/About"
import Achievements from "./pages/Achievements"
import Contact from "./pages/Contact"
import Education from "./pages/Education"
import Home from "./pages/Home"
import ProblemSolving from "./pages/ProblemSolving"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <ProblemSolving/>
      <Projects/>
      <Achievements/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default App
