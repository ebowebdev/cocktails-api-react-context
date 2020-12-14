import React from 'react'
import img from '../images/viva.png'
import Cocktails from './Cocktails'
import Contact from './Contact'

const Home = ()=>{
  return (
    <div>
      <div className="home">
        <img src={img} alt="imagee"/>
        <h1 className="home-box">
          Our job is give you the best Cocktails
        </h1>
      </div>
      <Cocktails />
      <hr/>
      <Contact />
    </div>
  )
}

export default Home