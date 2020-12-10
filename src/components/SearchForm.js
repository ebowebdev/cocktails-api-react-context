import React from 'react'
import { GlobalContext } from '../Context'

const Search =()=>{
  const { setSearch } = GlobalContext()
  return(
    <div className="search flex-column-center">
      <form className="flex-column-center">
        <label>search your best cocktail</label>
        <input type="text" name="search" placeholder="enter the first letter of the cocktail"
        onChange={(e)=>setSearch(e.target.value)}/>
      </form>
    </div>
  )
}

export default Search