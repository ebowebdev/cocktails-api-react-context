import Axios from 'axios';
import {createContext, useContext, useState, useEffect, useCallback} from 'react';

export const Context = createContext();

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f="

export const TheProvider =({children})=>{
  const [cocktails, setCocktails] = useState([])
  const [search, setSearch] = useState('a')
  const [loading, setLoading] = useState(true)
  
  const fetchCocktails = useCallback(async()=>{
    setLoading(true)
    try{
      const res = await Axios(`${URL}${search}`)
      const data = res.data.drinks
      const newCocktails = data.map(cocktail => {
      const {
        idDrink, strDrink,
        strCategory, strAlcoholic, 
        strGlass, strInstructions,
        strDrinkThumb, strIngredient1, 
        strIngredient2,  strIngredient3
      } = cocktail;
      return {
        id: idDrink, 
        name: strDrink,
        category: strCategory, 
        alcoholic: strAlcoholic, 
        glass: strGlass, 
        instruction: strInstructions,
        img: strDrinkThumb, 
        ing1: strIngredient1, 
        ing2: strIngredient2,  
        ing3: strIngredient3
      }
      })
      setCocktails(newCocktails)
      setLoading(false)
      }
    catch(e){
      console.log(e)
    }
  },[search])

  useEffect(()=>{
    fetchCocktails()
  },[search,fetchCocktails])
  

  return(
    <Context.Provider value={
      {loading, setLoading, 
      cocktails, setCocktails,
      search, setSearch, 
      fetchCocktails}}>
      {children}
    </Context.Provider>
  )
}

export const GlobalContext =()=>{
  return(
    useContext(Context)
  )
}