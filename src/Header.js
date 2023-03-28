import React from 'react';
import './Header.css';

function Header() {
  return (
     <div className="header">
        <div className="header__info">
          <h1>Upheave</h1>
          <img className="header__logo" src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1336.jpg?w=740" alt="" />
        </div>

        <h3>What we do</h3>

        <h3>Contact Us</h3>

        <h3>Login|Register</h3>
     </div>
  )
}

export default Header;