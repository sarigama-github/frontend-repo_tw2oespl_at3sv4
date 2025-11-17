import Hero from './components/Hero'
import TextToImage from './components/TextToImage'
import ImageEditing from './components/ImageEditing'
import FeaturesSlider from './components/FeaturesSlider'
import Why from './components/Why'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <TextToImage />
      <ImageEditing />
      <FeaturesSlider />
      <Why />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
