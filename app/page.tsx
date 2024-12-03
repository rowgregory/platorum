import FadedDivider from './components/common/FadedDivider'
import Header from './components/Header'
import Banner from './components/home/Banner'
import OurServices from './components/home/OurServices'
import 'aos/dist/aos.css'
import About from './components/home/About'
import AdditionalServices from './components/home/AdditionalServices'
import OurStory from './components/home/OurStory'
import OurEvents from './components/home/OurEvents'
import Footer from './components/Footer'
import UpcomingEvent from './components/home/UpcomingEvent'

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <Banner />
      <UpcomingEvent />
      <FadedDivider />
      <OurServices />
      <About />
      <AdditionalServices />
      <OurStory />
      <OurEvents />
      <FadedDivider />
      <Footer />
    </div>
  )
}

export default Home
