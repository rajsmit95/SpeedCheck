import React from 'react'
import Navbar from '../Navbar'
import Spedomter from '../Spedometer'
import Article from '../Article'
import Footer from '../Footer'
import Seosection from '../Seosection'

function Home() {
  return (
    <div style={{ backgroundColor: "#090a3a"}}>
      <Navbar />
      <Spedomter />
      <Article />
      <Seosection />
      <Footer />
    </div>
  )
}

export default Home
