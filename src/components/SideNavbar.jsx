import '../css/side-navbar.css'
import '../css/app.css'
import { useNavigate } from "react-router-dom"


function SideNavbar() {
    const navigate = useNavigate();

    const HandleClick = (e) => {
        var navbar = document.getElementById('nav-bar');
        if (navbar.style.display == 'flex') {
            navbar.style.display = 'none';
          } else {
            navbar.style.display = 'flex';
          }

        e.preventDefault()
        navigate('/' + e.target.id)
    }

    return (
        <div id='nav-bar' className='nav-bar'>
            <div className='link-container'>
                <a id='' onClick={e => HandleClick(e)}><p>Home</p></a>
                <a id='about' onClick={e => HandleClick(e)}><p>About us</p></a>
                <a id='resources' onClick={e => HandleClick(e)}><p>Resources</p></a>
                <a id='contact' onClick={e => HandleClick(e)}><p>Contact us</p></a>
            </div>
        </div>
    )
}

export default SideNavbar