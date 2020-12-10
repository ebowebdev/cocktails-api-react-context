import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="divOver divOver1"></div>
        <div className="divOver divOver2"></div>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
