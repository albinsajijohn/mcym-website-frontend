import { useState } from 'react'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Initiatives from './components/Initiatives'
import Stats from './components/Stats'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className="min-h-screen bg-cream">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Initiatives />
        <Stats />
        <Programs />
        <Gallery />
        <About />
        <Team />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App
