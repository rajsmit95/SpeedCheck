import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Home/>} />
          {/* Add more routes as needed for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
