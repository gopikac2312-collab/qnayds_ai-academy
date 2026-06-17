import Hero from './components/hero'
import Header from './components/header'
import './App.css'
import WhoIsThisFor from './components/whoisthisfor'

import Courses from './components/courses'
import Enroll from './components/enroll'
import Footer from './components/footer'
import Reviews from './components/reviews'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhoIsThisFor/>
     
      <Courses/>
      <Reviews/>
      <Enroll/>
      <Footer/>
    </>
  )
}

export default App