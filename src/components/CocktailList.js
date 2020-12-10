import React from 'react'
import Cocktail from '../components/Cocktail'
import { GlobalContext } from '../Context'

const CocktailList =()=>{
  const { cocktails } = GlobalContext();
  if(cocktails !== []){
    return (
      <div className="cocktailList">
        {console.log(cocktails)}
        {cocktails.map(cocktail => <Cocktail key={cocktail.id} cocktail={cocktail}/>)}
      </div>
    )
  }else {
    return (
      <div>
        <h1>wait for the cocktails</h1>
      </div>
    )
  }
}

export default CocktailList