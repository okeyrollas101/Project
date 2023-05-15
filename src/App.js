import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";


function App() {
   return (
    <Router>

        <div className="App">

           <Routes>
              <Route path="/" element={[<Header />, <Home />]}/>
              <Route path="/about" element={[<Header />, <About />]}/>
              <Route path="/contact" element={[<Header />, <Contact />]}/>
              <Route path="/login" element={[<Login />]}/>
           </Routes>
        </div>
    </Router>
  );
}

export default App;

