import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Spedometer from './Components/Spedometer';
import Article from './Components/Article';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Spedometer/>
      <Article />
      <Footer />
          
    </div>
  );
}

export default App;
