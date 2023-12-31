import Footer from '../components/Footer'
import Header from '../components/Header'
import SignUp from '../components/SignUpNow'
import SideNavbar from '../components/SideNavbar'
import Profile from '../components/Profile'
import '../css/about.css'
import Bergman from "../media/theberg.jpg"
import Lindsey from "../media/lindsey.webp"

export default function About() {

  let exampleProfile = {
    quote:`"FTAC: Where the transition from civilian to Airman is a journey we'll guide you through with dedication and a touch of esprit de corps."`,
    rank:'TSgt',
    name:'Valerie Lindsey',
    role:'Senior Coordinator',
    email:'valerie.lindsey@us.af.mil',
    phone:'1-800-555-8152',
    photo:Lindsey
  }
  let exampleProfile2 = {
    quote:`"FTAC: Where the transition from civilian to Airman is a journey we'll guide you through with dedication and a touch of esprit de corps."`,
    rank:'TSgt',
    name:'Valerie Lindsey',
    role:'Senior Coordinator',
    email:'valerie.lindsey@us.af.mil',
    phone:'1-800-555-8152',
    photo:Bergman
  }

  return (
    <>
      <Header title={"Who We Are"} />
      <SignUp />
      <div className='body-container-about'>
        <div className='about-content-container'>
          <div className='profiles'>
            <Profile profile={exampleProfile}/>
            <Profile profile={exampleProfile2}/>
          </div>
          <div className='about-paragraph-container'>
            <h1>Our Mission</h1>
            <span className='about-paragraph'>At the First Term Airman's Course, our mission is clear: to empower and equip newly enlisted Air Force personnel with the knowledge, skills, and values necessary for success in their military journey. We are committed to fostering financial responsibility through comprehensive finance education, ensuring our airmen have the financial acumen to secure their future. We strive to instill a deep understanding of Air Force culture, promoting pride, professionalism, and unity within our ranks. Through engaging icebreaking activities, we forge bonds that will last a lifetime, creating a supportive community where every airman can thrive. Our mission is to prepare, educate, and inspire, setting airmen on a path to excellence in service to their country and a fulfilling Air Force career.
            </span>
            <span className='about-paragraph'>
              Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Semper eget duis at tellus at urna. Nunc faucibus a pellentesque sit. Dictum varius duis at consectetur lorem donec massa sapien. Feugiat pretium nibh ipsum consequat. Faucibus turpis in eu mi bibendum neque. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Urna et pharetra pharetra massa massa ultricies. Viverra adipiscing at in tellus integer feugiat. Gravida arcu ac tortor dignissim convallis aenean et. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Pulvinar neque laoreet suspendisse interdum consectetur libero id.
            </span>
          </div>
        </div >
      </div>
      <SideNavbar />
      <Footer />
    </>
  )
}

