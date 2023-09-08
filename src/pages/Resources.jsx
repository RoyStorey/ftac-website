import Footer from '../components/Footer'
import Header from '../components/header'
import Slideshow from '../components/Slideshow'
import LearnMore from '../components/LearnMore'
import SignUp from '../components/SignUpNow'
import SideNavbar from '../components/SideNavbar'
import { useState } from 'react'
import '../css/app.css'
import '../css/resources.css'
import Resource from '../components/Resource'

export default function Resources() {

  const exampleResource = { name: 'Example Resource', description: 'The FTAC finance class equips new Air Force members with essential financial skills, covering budgeting, money management, and future planning to ensure responsible financial decision-making throughout their military careers.' }

  return (
    <>
      <Header title={'Resources'} />
      <SignUp />
      <div className='body-container-resources'>
        <div className='resources-container'>
          <p className='desktop-only'>The "First Term Airman's Course" provides a comprehensive resource for newly enlisted Air Force personnel, offering a multifaceted approach to their integration into military life. This course encompasses three core elements:
          </p>
          <p className='desktop-only'>
            First, it emphasizes financial education, equipping airmen with essential financial literacy skills. Participants gain knowledge in budgeting, managing finances, and planning for their future, ensuring financial responsibility.
            Secondly, the course delves into the intricacies of Air Force culture, fostering a deep understanding of the service's history, traditions, and values. It instills a sense of identity and pride among airmen, helping them navigate military ethics, customs, courtesies, and professional development.
            To enhance camaraderie and teamwork, the course includes engaging icebreaking activities. These activities not only facilitate relationship-building but also create an enjoyable and memorable transition into the Air Force community.
          </p>
          <div className='resources'>
            <Resource resourceobject={exampleResource} />
            <Resource resourceobject={exampleResource} />
            <Resource resourceobject={exampleResource} />
            <Resource resourceobject={exampleResource} />
            <Resource resourceobject={exampleResource} />
          </div>
        </div>
      </div>
      <SideNavbar />
      <Footer />
    </>
  )
}

