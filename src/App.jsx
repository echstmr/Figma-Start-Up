import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Title from './components/Title/Title'
import Featured from './components/Featured/Featured'
import Content from './components/Contents/Content'
import Gallery from './components/Gallery/Gallery'
import Partners from './components/Partners/Partners'
import Testimonial from './components/Testimonial/Testimonial'
import Ads from './components/Ads/Ads'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <Title title="FEATURES" subtitle="Most calendars are designed for teams. Slate is designed for 
              freelancers who want a simple way to plan their schedule." />
      <Featured/>
       <Title title="Contents" subtitle="We focus on ergonomics and meeting you where you work. It's only a keystroke away."/>
      <Content/>
      <Title title="Gallery" subtitle="We focus on ergonomics and meeting you where you work. It's only a keystroke away."/>
      <Gallery/>
      <Title title="Partners" subtitle="We focus on ergonomics and meeting you where you work. It's only a keystroke away."/>
      <Partners/>
      <Title title="Testimonials"/>
      <Testimonial/>
      <Ads/>
      <Footer/>


    </div>
  )
}

export default App
