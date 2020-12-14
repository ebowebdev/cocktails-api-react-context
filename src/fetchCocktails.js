import axios from 'axios';

const URL_COCKTAILS = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const URL_COCKTAIL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

async function TheCocktail(){
  if(this.theId === 0) return
  console.log('-----TheCocktail')
  try{
    this.setLoading(true)
    const res = await axios.get(`${URL_COCKTAIL}${this.theId}`)
    const data = res.data.drinks[0]
    const {
      idDrink, strDrink,
      strCategory, strAlcoholic, 
      strGlass, strInstructions,
      strDrinkThumb, strIngredient1, 
      strIngredient2,  strIngredient3
    } = data;
    const newCocktail = {
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
    this.setCocktail(newCocktail)
    this.setLoading(false)
  }catch(err){
    console.log(err)
  }
}

async function TheCocktails(){
  console.log('-----TheCocktailssss')
  this.setLoading(true)
  try{
    const res = await axios(`${URL_COCKTAILS}${this.search}`)
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
    this.setCocktails(newCocktails)
    this.setLoading(false)
    }
  catch(e){
    this.setLoading(true)
    console.log(e)
  }
}

export {
  TheCocktails,
  TheCocktail
}