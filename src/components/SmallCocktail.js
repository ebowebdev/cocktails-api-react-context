import React from 'react'
import {useHistory} from 'react-router-dom'

function SmallCocktail(props){
  let history = useHistory()
  const {cocktail} = props
  return (
    <div className="small-cocktail">
      <div className="small-cocktail-box-img">
        <img src={cocktail.img} alt="cocktail_image"/>
      </div>
      <div className="small-cocktail-box-desc">
        <p>Name :<strong>{cocktail.name}</strong></p>
        <p>Type :<strong>{cocktail.alcoholic}</strong></p>
        <p>Gradients :
          <strong>
          {cocktail.ing1}, {cocktail.ing1} and {cocktail.ing1}
          </strong>
        </p>
        <button onClick={()=>history.push(`/cocktail/${cocktail.id}`)}>details</button>
      </div>
    </div>
  )
}

export default SmallCocktail