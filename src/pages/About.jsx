import Footer from '../components/Footer'
import Header from '../components/header'
import Slideshow from '../components/Slideshow'
import LearnMore from '../components/LearnMore'
import { useState } from 'react'
import '../css/about.css'
import Bergman from "../media/theberg.jpg"
import Lindsey from "../media/lindsey.webp"

export default function About() {


  return (
    <>
      <Header title={"Who We Are"} />
      <div className='body-container-about'>
        <div className='about-content-container'>
          <div className='about-header-container'>
            {/* <h1 className='about-header'>Who We Are</h1> */}
          </div>
          <div className='profiles'>

            <div className='profile profile-left'>
              <div className='text-container'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor. Vitae tempus quam pellentesque nec nam.</p>
                <div className='info-container'>
                  <p>MTSgt Anthony Bergman</p>
                  <p>Senior Instructor</p>
                  <p>anthony.bergman@us.af.mil</p>
                  <p>1-800-555-8152</p>
                </div>
              </div>
              <img className='profile-picture' src={Bergman} loading="lazy" alt='bergman' />
            </div>

            <div className='profile profile-right'>
              <div className='text-container'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor. Vitae tempus quam pellentesque nec nam.</p>
                <div className='info-container'>
                  <p>MTSgt Anthony Bergman</p>
                  <p>Senior Instructor</p>
                  <p>anthony.bergman@us.af.mil</p>
                  <p>1-800-555-8152</p>
                </div>
              </div>

              <img className='profile-picture' src={Lindsey} alt='bergman' />
            </div>

          </div>
          <div className='about-paragraph-container'>
            <h1>Our Mission</h1>
            <span className='about-paragraph'>At the First Term Airman's Course, our mission is clear: to empower and equip newly enlisted Air Force personnel with the knowledge, skills, and values necessary for success in their military journey. We are committed to fostering financial responsibility through comprehensive finance education, ensuring our airmen have the financial acumen to secure their future. We strive to instill a deep understanding of Air Force culture, promoting pride, professionalism, and unity within our ranks. Through engaging icebreaking activities, we forge bonds that will last a lifetime, creating a supportive community where every airman can thrive. Our mission is to prepare, educate, and inspire, setting airmen on a path to excellence in service to their country and a fulfilling Air Force career.
            </span><br /><br />
            <span className='about-paragraph'>
              Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Semper eget duis at tellus at urna. Nunc faucibus a pellentesque sit. Dictum varius duis at consectetur lorem donec massa sapien. Feugiat pretium nibh ipsum consequat. Faucibus turpis in eu mi bibendum neque. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Urna et pharetra pharetra massa massa ultricies. Viverra adipiscing at in tellus integer feugiat. Gravida arcu ac tortor dignissim convallis aenean et. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Pulvinar neque laoreet suspendisse interdum consectetur libero id.
            </span>
          </div>
        </div >
      </div>
      <Footer />
    </>
  )
}

