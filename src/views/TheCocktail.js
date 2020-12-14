import React , {useEffect} from 'react'
import Cocktail from '../components/Cocktail'
import { GlobalContext } from '../Context'
import {useParams} from 'react-router-dom'

function TheCocktail(){
  const { id } = useParams()
  const {setTheId, cocktail} = GlobalContext()
  
  useEffect(()=>{
    setTheId(id)
  },[id,setTheId])

  return (
    <div className="flex-column-center">
      <Cocktail cocktail={cocktail}/>
    </div>
  )
}

export default TheCocktail