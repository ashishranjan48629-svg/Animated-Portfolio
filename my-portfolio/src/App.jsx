import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Expriences from './sections/Expriences'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
// import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'

function App() {

  return (
    <div className='relative gradient text-white'>
      <CustomCursor />
      {/* <ParticlesBackground/> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Expriences />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
