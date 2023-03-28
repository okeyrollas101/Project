import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";


function App() {
   return (
    <Router>

        <div className="App">

           <Routes>
              <Route path="/" element={[<Header />]}/>
           </Routes>
        </div>
    </Router>
  );
}

export default App;

