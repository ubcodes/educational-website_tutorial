import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-Section/HeroSection'
import Company from '../components/Company-section/Company'
import Offer from '../components/Offer/Offer'
import Courses from '../components/Courses-section/Courses'
import AboutUs from '../components/About-us/AboutUs'
import Updates from '../components/GetUpdates/Updates'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection />
        <Company />
        <Offer />
        <Courses />
        <AboutUs />
        <Updates />
        <Footer />
    </Fragment>
  )
}

export default Home