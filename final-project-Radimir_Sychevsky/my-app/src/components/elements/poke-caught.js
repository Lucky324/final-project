import React from 'react';
import axios from 'axios';
import PokemonListItem from "./poke-item";
import Button from "../items/button";

export default class PokemonCaught extends React.Component {
    state = {
        pokemons: null,
        items_count: 10,
        isLoad: false
    };
    async componentDidMount() {
        const data = await axios.get('http://localhost:3001/pokemons');
        let caught = [];
        let count = 0;
        for(let pokemon of data.data){
            if(pokemon.isCaught !== undefined){
                caught.push(pokemon);
                count++;
            }
            if (count === this.state.items_count){
                break;
            }
        }
        this.setState({pokemons: caught, isLoad: true});
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