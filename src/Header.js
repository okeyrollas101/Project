import React from 'react';
import './Header.css';

function Header() {
  return (
     <div className="header">
        <div className="header__info">
          <img className="header__logo" src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1336.jpg?w=740" alt="" />
          <h1 className='header__name'>Upheave</h1>
        </div>

        <h3 className='header__options'>What we do</h3>

        <h3 className='header__options'>Contact Us</h3>

        <h3 className='header__options'>Login|Register</h3>
     </div>
  )
}

export default Header;