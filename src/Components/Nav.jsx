import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.css'
export default function Nav() {
  return (
    <div>
        <nav className='navbar'>
            <Link to={'/'} className='navlink'>Nav</Link>
            <Link to={'/home'} className='navlink'>Home</Link>
            <Link to={'/about'} className='navlink'>About</Link>
            <Link to={'/contact'} className='navlink'>Contact</Link>
        </nav>
    </div>
  )
}
