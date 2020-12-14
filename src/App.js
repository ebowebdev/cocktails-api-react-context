import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Contact from './views/Contact';
import TheCocktail from './views/TheCocktail';
import Cocktails from './views/Cocktails';
import './App.css';

function App(){
  return (
    <BrowserRouter>
      <div className="App flex-column-center">
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/cocktails"><Cocktails /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/cocktail/:id"><TheCocktail /></Route>
          <Route><Home /></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
