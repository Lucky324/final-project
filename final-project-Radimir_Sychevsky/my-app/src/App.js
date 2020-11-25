import './App.css';
import { Route } from 'react-router-dom';
import PokedexHeader from "./components/elements/header";
import PokemonList from "./components/elements/poke-list";
import PokemonPage from "./components/elements/poke-page";
import PokemonCaught from "./components/elements/poke-caught";

function App() {
  return (
    <div className="pokedex">
        <PokedexHeader/>
        <Route exact path='/' component={PokemonList} />
        <Route exact path='/pokemons/:id' component={PokemonPage}/>
        <Route exact path='/caught' component={PokemonCaught} />
    </div>
  );
}

export default App;
