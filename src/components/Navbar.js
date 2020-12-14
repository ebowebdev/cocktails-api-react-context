import React from 'react';
import {Link} from 'react-router-dom'

const Navbar =()=>{
  return(
    <div className="nav">
      <h1>The World Of Cocktail</h1>
      <ul>
        <Link exact to="/" className="link">Home</Link>
        <Link to="/cocktails" className="link">Cocktails</Link>
        <Link to="/contact" className="link">Contact</Link>
      </ul>
    </div> 
  )
}

export default Navbar