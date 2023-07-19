import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import student from './assets/education.avif';

const Login = () => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
         e.preventDefault();

         auth
             .signInWithEmailAndPassword(email, password)
             .then(auth => {
                 navigate('/details')
             })
             .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // it succefully created a new user with email n password
                // console.log(auth);
                 navigate('/details')
            })
            .catch(error => alert(error.message))
   }

    return(
        <div className="login">
            <Link to='/'>
              <img className="login__logo" src={student} alt="" />
            </Link>

            <div className="login__container">
               <h1>Sign-In</h1>

               <form action="">
                  <h5>E-mail</h5>
                  <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                  <h5>Password</h5>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                  <button type='submit' onClick={signIn} className='login__signInButton'>Sign in</button>
               </form>

               <p>By signing-in you agree to Upheaves Conditions of Use. Please see our Privacy Notice and Cookies Notice.<span>Don't have an Account? Click the button below</span></p>

               <button onClick={register} className='login__registerButton'>Create your Upheave Account</button>
            </div>
        </div>
    );
}
 
export default Login;