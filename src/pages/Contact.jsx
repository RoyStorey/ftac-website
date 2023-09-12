import Footer from '../components/Footer'
import Header from '../components/Header'
import SignUp from '../components/SignUpNow'
import SideNavbar from '../components/SideNavbar'
import '../css/contact.css'

export default function Contact() {

  return (
    <>
      <Header title={'Contact Us'} />
      <SignUp />
      <div className='body-container-contact'>
        <form className='form-container'>
          <h5>Name</h5>
          <input className="form-input" placeholder="Please enter your name" required='true' name='name'/>
          <h5>Return Email</h5>
          <input className="form-input" placeholder="Please enter your email" required='true' name='email' />
          <h5>Phone</h5>
          <input className="form-input" placeholder="(xxx-xxx-xxxx)" required='true'name='phone'/>
          <h5>Please enter what you need help with</h5>
          <textarea className="form-input" placeholder="Course Enrollment, More information or Resources that may not be on our resource page ..etc" required='true' />
          <button className='form-submit' type='submit'>Submit</button>
          <p>We eagerly anticipate individuals reaching out to join the First Term Airman's Course. Our dedicated team is committed to guiding, empowering, and inspiring every new Air Force member who seeks to embark on this transformative journey. We can't wait to welcome you into our community and provide you with the resources and knowledge you need to excel in your military career.</p>
        </form>
      </div>
      <SideNavbar />
      <Footer />
    </>
  )
}

