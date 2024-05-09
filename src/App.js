import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Singlepost from './Components/Blog/Singlepost';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:id" element={<Singlepost />} />
          {/* Add more routes as needed for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
