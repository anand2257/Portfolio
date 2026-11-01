import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolving from './components/ProblemSolving'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Global background orbs */}
      <div className="global-orb-1" aria-hidden="true" />
      <div className="global-orb-2" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />

        <div className="section-divider" role="separator" aria-hidden="true" />
        <ProblemSolving />

        <div className="section-divider" role="separator" aria-hidden="true" />
        <About />

        <div className="section-divider" role="separator" aria-hidden="true" />
        <Skills />

        <div className="section-divider" role="separator" aria-hidden="true" />
        <Projects />

        <div className="section-divider" role="separator" aria-hidden="true" />
        <Experience />

        <div className="section-divider" role="separator" aria-hidden="true" />
        <Achievements />

        <div className="section-divider" role="separator" aria-hidden="true" />
        <Education />

        <div className="section-divider" role="separator" aria-hidden="true" />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
