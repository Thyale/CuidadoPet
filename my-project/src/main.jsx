import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './Header/Header'
import FirstSection from './Main/FirstSection'
import SecondSection from './Main/SecondSection'
import ThirdSection from './Main/ThirdSection'
import FourthSection from './Main/FourthSection'
import Footer from './Footer/Footer'

import IconWhats from './Main/WhatsApp/IconWhats'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
    <Footer/>

    <IconWhats/>
  </StrictMode>,
)
