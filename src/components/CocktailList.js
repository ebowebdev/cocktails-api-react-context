import React from 'react'
import Cocktail from '../components/Cocktail'
import { GlobalContext } from '../Context'

const CocktailList =()=>{
  const { cocktails } = GlobalContext();
  return (
    <div className="cocktailList">
      {console.log(cocktails)}
      {cocktails.map(cocktail => <Cocktail key={cocktail.id} cocktail={cocktail}/>)}
    </div>
  )
}

export default CocktailList