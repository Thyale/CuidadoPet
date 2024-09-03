import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './Header/Header'
import FirstSection from './Main/FirstSection'
import SecondSection from './Main/SecondSection'
import ThirdSection from './Main/ThirdSection'
import Footer from './Footer/Footer'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    <Footer/>
  </StrictMode>,
)
