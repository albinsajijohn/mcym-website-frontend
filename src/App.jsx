import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Initiatives from './components/Initiatives'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Initiatives />
      <Programs />
      <Gallery />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
