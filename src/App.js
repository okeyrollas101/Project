import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";


function App() {
   return (
    <Router>

        <div className="App">

           <Routes>
              <Route path="/About" element={[<Header />, <About />]}/>
              <Route path="/" element={[<Header />, <Home />]}/>
           </Routes>
        </div>
    </Router>
  );
}

export default App;

