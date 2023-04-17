import React from "react";
import './Footer.css';
import fb from './assets/fbimg.png';
import twitter from './assets/twitterimg.png';
import linkedin from './assets/linkedinimg.png';
import insta from './assets/instaimg.png';

const Footer = () => {
    return (
        <div className='footer'>
           <h4>coming soon on</h4>

           <div className="footer__socialmedia">
              <p><img src={fb} alt="" /></p>
              <p><img src={twitter} alt="" /></p>
              <p><img src={linkedin} alt="" /></p>
              <p><img src={insta} alt="" /></p>
           </div>

           <p>Copyright © 2023. All rights reserved.</p>
        </div>
    );
}
 
export default Footer;
