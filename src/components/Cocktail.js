import React from 'react'

const Cocktail =(props)=>{
  const {
    name,category,alcoholic,glass,
    instruction,ing1,ing2,ing3,img} = props.cocktail;
  return(
    <div className="cocktail flex-column-center">
      <div className="cocktail-img-div">
        <img src={img} alt="cocktail_image"/>
      </div>
      <div className="cocktail-header">
        <h2>{name}</h2>
        <span>{category}</span>
      </div>
      <div className="cocktail-body">
        <h3>{glass}</h3>
        <h4>{alcoholic}</h4>
        <p>{instruction}</p>
      </div>
      <div className="cocktail-footer">
        <h4>ingredient:</h4>
        <p>{ing1?ing1:''} </p>
        <p>{ing2?ing2:''} </p>
        <p>{ing3?ing3:''}</p>
      </div>
    </div> 
  )
}

export default Cocktail