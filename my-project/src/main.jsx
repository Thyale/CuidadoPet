import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './Header/Header'
  import Introduction from './MainHome/Introduction'
  import About from './MainHome/About'
  import WeOffer from './MainHome/WeOffer'
  import InformationBar from './MainHome/InformationBar'
  import OurServices from './MainHome/OurServices'
  import VideoPetAllergy from './MainHome/VideoPetAllergy'
  import Comments from './MainHome/Comments'
import Footer from './Footer/Footer'

import IconWhats from './MainHome/WhatsApp/IconWhats'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <Introduction/>
      <About/>
      <WeOffer/>
      <InformationBar/>
      <OurServices/>
      <VideoPetAllergy/>
      <Comments/>
    <Footer/>
    <IconWhats/>
  </StrictMode>,
)
