import Footer from '../components/Footer'
import Header from '../components/Header'
import Slideshow from '../components/Slideshow'
import SignUp from '../components/SignUpNow'
import SideNavbar from '../components/SideNavbar'
import '../css/app.css'

export default function Home() {


  return (
    <>
      <Header title={'First Term Airman\'s Course'} />
      <SignUp />
      <div className='body-container'>
        <Slideshow />
      </div>
      <SideNavbar />
      <Footer />
    </>
  )
}

