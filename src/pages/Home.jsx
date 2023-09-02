import Footer from '../components/Footer'
import Header from '../components/header'
import Slideshow from '../components/Slideshow'
import LearnMore from '../components/LearnMore'
import { useState } from 'react'
import '../css/app.css'

export default function Home() {


  return (
    <>
      <Header title={'First Term Airman\'s Course'} />
      <div className='body-container'>
        <Slideshow />
        {/* <LearnMore /> */}
      </div>
      <Footer />
    </>
  )
}
