import {createContext, useContext, useState, useEffect, useCallback} from 'react';
import { TheCocktails, TheCocktail } from './fetchCocktails'
export const Context = createContext();


export const TheProvider =({children})=>{
  const [cocktails, setCocktails] = useState([])
  const [cocktail, setCocktail] = useState({})
  const [search, setSearch] = useState('a')
  const [theId, setTheId] = useState(0)
  const [loading, setLoading] = useState(true)
  
  const fetchCocktails = useCallback(()=>{TheCocktails.call({setLoading,search,setCocktails})},[search])
  const fetchCocktail = useCallback(()=>{TheCocktail.call({setLoading,setCocktail,theId})},[theId])

  useEffect(()=>{
    fetchCocktails()
  },[search,fetchCocktails])
  
  useEffect(()=>{
    fetchCocktail()
  },[theId,fetchCocktail])

  return(
    <Context.Provider value={
      {loading, setLoading, 
      cocktails, setCocktails,
      cocktail, setCocktail,
      theId, setTheId,
      search, setSearch, 
      fetchCocktails,fetchCocktail}}>
      {children}
    </Context.Provider>
  )
}

export const GlobalContext =()=>{
  return(
    useContext(Context)
  )
}