import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
   const [clicked, setClicked] = useState(false);

   const handleClick = () => {
      setClicked(true);
   }


  return (
     <div className="header">
        <Link to='/' className='link__style'>
          <div className="header__info">
            <img className="header__logo" src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1336.jpg?w=740" alt="" />
            <h1 className='header__name'>Upheave</h1>
          </div>
        </Link>

        <Link to='/About' className='link__style'>
          <h3 className='header__options' onClick={handleClick} style={{ color: clicked ? 'blue' : ''}}>What we do</h3>
        </Link>

        <h3 className='header__options'>Contact Us</h3>

        <h3 className='header__options'>Login|Register</h3>
     </div>
  )
}

export default Header;