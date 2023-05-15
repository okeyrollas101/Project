import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="login">
            <Link to='/'>
              <img className="login__logo" src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1336.jpg?w=740" alt="" />
            </Link>

            <div className="login__container">
               <h1>Sign-In</h1>

               <form action="">
                  <h5>E-mail</h5>
                  <input type="text" />

                  <h5>Password</h5>
                  <input type="password" />

                  <button className='login__signInButton'>Sign in</button>
               </form>

               <p>By signing-in you agree to Upheaves Conditions of Use. Please see our Privacy Notice and Cookies Notice.<span>Don't have an Account? Click the button below</span></p>

               <button className='login__registerButton'>Create your Upheave Account</button>
            </div>
        </div>
    );
}
 
export default Login;