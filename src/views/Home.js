import React from 'react'
import Search from '../components/SearchForm'
import CocktailList from '../components/CocktailList'

export default function Home(){

  return(
    <div className="home flex-column-center">
      <Search />
      <CocktailList />
    </div>
  )
}