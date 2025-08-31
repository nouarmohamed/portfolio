import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Projects from "./components/projects"
import Testimonials from "./components/Testimonials"


const App = () => {
  return(
    <main className='bg-background'>
      <div className="">
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </main>
  )
}

export default App
