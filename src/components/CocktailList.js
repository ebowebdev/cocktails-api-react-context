import React from 'react'
import SmallCocktail from "../components/SmallCocktail"
import { GlobalContext } from '../Context'

const CocktailList =()=>{
  const { cocktails, loading } = GlobalContext();
  return (
    loading ? 
    (<h1>loading ...</h1>) : 
    (<div className="cocktailList">
      {cocktails.map(cocktail => <SmallCocktail key={cocktail.id} cocktail={cocktail}/>)}
    </div>)
  )
}

export default CocktailList