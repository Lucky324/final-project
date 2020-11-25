import React from 'react';
import axios from 'axios';
import PokemonListItem from "./poke-item";
import Button from "../items/button";

export default class PokemonList extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoad: false, items_count: 10, pokemons: null};
    }
    async componentDidMount() {
        const data = await axios.get('http://localhost:3001/pokemons');
        this.setState({pokemons: data.data.slice(0, this.state.items_count), isLoad: true});
    };
    LoadPokemons(){
        this.setState({items_count: this.state.items_count + 10});
        this.componentDidMount();
    }
    render() {
        if(this.state.isLoad){
            const list_items = this.state.pokemons.map(pokemon => <PokemonListItem id={pokemon.id} name={pokemon.name} isCaught={pokemon.isCaught}/>);
            return(
                <div>
                    <div className='pokemon-list'>
                        {list_items}
                    </div>
                    <div className='item-list_load'>
                        <Button text={'more!'} onClick={this.LoadPokemons.bind(this)}/>
                    </div>
                </div>
            )
        } else {
                return(
                    <p className='loading-data'>Loading</p>
                )
        }
    }
}