import '../css/header.css'
import '../css/app.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import AirForce from '../media/aflogo.png'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header(props) {
  const navigate = useNavigate();

  const HandleClick = (e) => {
    e.preventDefault()
    navigate('/' + e.target.id)
  }

  return (
    <div className="header">
      <span className="header-image-container">
        <img className="header-image" draggable='false' src={AirForce} alt="air force logo" />
      </span>
      <h2 className='header-title'>{props.title}</h2>
      <div className='header-links desktop-only'>
        <a className='header-link' id='' onClick={e => HandleClick(e)}>Home</a>
        <a className='header-link' id='about' onClick={e => HandleClick(e)}>About us</a>
        <a className='header-link' id='resources' onClick={e => HandleClick(e)}>Resources</a>
        <a className='header-link' id='contact' onClick={e => HandleClick(e)}>Contact us</a>
      </div>
      <FontAwesomeIcon icon={faBars} className='bars-icon mobile-only'/>
    </div>
  )
}
