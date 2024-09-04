import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './Header/Header'
  import Introduction from './Main/Introduction'
  import WeOffer from './Main/WeOffer'
  import InformationBar from './Main/InformationBar'
  import OurServices from './Main/OurServices'
  import VideoPetAllergy from './Main/VideoPetAllergy'
  import Comments from './Main/Comments'
import Footer from './Footer/Footer'

import IconWhats from './Main/WhatsApp/IconWhats'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <Introduction/>
      <WeOffer/>
      <InformationBar/>
      <OurServices/>
      <VideoPetAllergy/>
      <Comments/>
    <Footer/>
    <IconWhats/>
  </StrictMode>,
)
