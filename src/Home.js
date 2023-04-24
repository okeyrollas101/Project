import React from 'react';
import './Home.css';
import Footer from './Footer';

function Home() {
  return (
    <div className="home">
       <div className="home__welcome">
          <p><span style={{fontSize: 100, fontFamily: 'Times New Roman'}}>WELCOME</span>, our dear valued customers! You are the reason why we do what we do! 
            Please feel free to find whatever you need on our site. We got you covered!, 
            We welcome you to our app launch! Be one of the first to experience our services.</p>
       </div>

       <div className="home__info">
          <p>Don't flinch, your info is safe with Upheave...It's about time to get started with our Archive</p>
          <big>Create An Account and get Started.</big>
       </div>

       <Footer />
    </div>
  )
}

export default Home;