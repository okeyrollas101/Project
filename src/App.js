import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import StudentDetails from "./StudentDetails";


function App() {
   const [{}, dispatch] = useStateValue();

   useEffect(() => {
     // will only run once when the app components loads
     auth.onAuthStateChanged(authUser => {
          console.log('The User is >>>', authUser);

          if (authUser) {
              // the user just logged in / the user was logged in
             dispatch({
                type: 'SET_USER',
                user: authUser
             })
          }
          else {
            // user is logged out
             dispatch({
                type: 'SET_USER',
                user: null
             })
          }
     })
   }, [])

   return (
    <Router>

        <div className="App">

           <Routes>
              <Route path="/" element={[<Header />, <Home />]}/>
              <Route path="/about" element={[<Header />, <About />]}/>
              <Route path="/contact" element={[<Header />, <Contact />]}/>
              <Route path="/login" element={[<Login />]}/>
              <Route path="/details" element={[<StudentDetails />]}/>
           </Routes>
        </div>
    </Router>
  );
}

export default App;

