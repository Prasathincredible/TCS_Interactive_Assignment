import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import News from '../components/News'
import About from '../components/About'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <News/>
      <About/>
      <Footer/>
    </>
  )
}

export default LandingPage