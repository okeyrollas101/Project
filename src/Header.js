import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import student from './assets/education.avif';

function Header() { 
  
  const navLinkStyles = ({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: isActive ? 'none' : ''
        }
  }

  return (
     <div className="header">
        <Link to='/' className='link__style'>
          <div className="header__info">
            <img className="header__logo" src={student} alt="" />
            <h1 className='header__name'>Upheave</h1>
          </div>
        </Link>

        <nav>
           <NavLink style={navLinkStyles} className='active' to='/about'>What we do</NavLink>
           <NavLink style={navLinkStyles} className='active' to='/contact'>Contact Us</NavLink>
           <NavLink style={navLinkStyles} className='active' to='/login'>Login|Register</NavLink>
        </nav>
     </div>
  )
}

export default Header;