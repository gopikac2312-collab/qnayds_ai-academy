import Hero from './components/hero'
import Header from './components/header'
import './App.css'
import WhoIsThisFor from './components/whoisthisfor'

import Courses from './components/courses'
import Enroll from './components/enroll'
import Footer from './components/footer'
import Reviews from './components/reviews'
import WhatsAppButton from './components/whatsappButton'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhoIsThisFor/>
     <WhatsAppButton/>
      <Courses/>
      <Reviews/>
      <Enroll/>
      <Footer/>
    </>
  )
}

export default App