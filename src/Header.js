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

            
            <a href="https://github.com/Rodrick12123" target="_blank" className='header_home'>
                GitHub
            </a>
            
            
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
