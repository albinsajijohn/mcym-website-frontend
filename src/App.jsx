import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import Countdown from './pages/Countdown'
import QRPoster from './pages/QRPoster'

function Home() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<Countdown />} />
        <Route path="/poster" element={<QRPoster />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
