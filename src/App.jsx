import './App.css';
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { FAQ } from "./components/FAQ"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { PublicidadAmazon } from './components/PublicidadAmazon';
import { ScrollButton } from './components/ScrollButton';

import { Services } from "./components/Services"
import { Testimonials } from "./components/Testimonials"






export const App = () => {

  return (
    <div>
      <Navbar/>
      
      <Header/>
      <PublicidadAmazon/>
      <Services/>
      <About/>
      <PublicidadAmazon/>
      <FAQ/>
      <Testimonials/>
      <Contact/>
      <PublicidadAmazon/>
      <Footer/>
     
      <ScrollButton/>

      <a href="https://wa.me/5492995873256" className="whatsapp-button" target="_blank" rel="noreferrer">
      💬 
      </a>

    </div>
  )


}
  
  


