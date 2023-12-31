import '../css/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className='footer-row'>
                <div className='container'>
                    <a href='/'><h5>Home</h5></a>
                    <a href='/about'><h5>Who We Are</h5></a>
                    <a href='/resources'><h5>Resources</h5></a>
                    <a href='/contact'><h5>Contact</h5></a>
                </div>
            </div>
            <div className='footer-row'>
                <h5>Website Created by Bonko Solutions</h5>
            </div>
        </footer>
    )
}

export default Footer