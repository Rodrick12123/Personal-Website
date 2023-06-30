import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='header_nav'>
            <Link to="/">
                <div className='header_home'>
                    Home
                </div>
            </Link>
            
            <Link to="/projects">
                <div className='header_projects'>
                    Projects
                </div>
            </Link>
            
            
        </div>
    </div>
  )
}

export default Header
