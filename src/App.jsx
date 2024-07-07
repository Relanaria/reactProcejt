import { useState } from 'react';
import HeaderSection from './components/headerSection';
import ServiceSection from './components/ServiceSection';
import AboutSection from './components/AboutSection';
import BestSellers from './components/TopSelledProducts';
import FeaturedProducts from './components/FeaturedProducts';
import NewArrivals from './components/NewArrivals';
import ContactSection from './components/ContactSection';
import ClientSection from './components/ClientSection';
import InfoSection from './components/InfoSection';
import FooterSection from './components/FooterSection';



function App() {

  return (
    <>
    <HeaderSection />

    <ServiceSection />

    <AboutSection />

    <BestSellers />

    <FeaturedProducts />

    <NewArrivals />

    <ContactSection />

    <ClientSection />

    <InfoSection />

    <FooterSection />

    </>
  )
}

export default App
