import React from 'react';
import Button from "../items/button";
import {Link} from "react-router-dom";
import axios from 'axios';
import PokemonImage from "../items/image";


export default class PokemonListItem extends React.Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        isCaught: this.props.isCaught
    };
    CatchPokemon(){
        this.setState({isCaught: true});
        const date = new Date(Date.now());
        const new_date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
        axios({
            method: 'put',
            url: `http://localhost:3001/pokemons/${this.state.id}`,
            data: {
                name: this.state.name,
                id: this.state.id,
                isCaught: true,
                caughtDate: new_date
            }
        })
    }
    render() {
        return(
            <div className='poke-list_item'>
                <div>
                    <Link to={`/pokemons/${this.state.id}`}>
                        <div className='poke-list_item_name'>{this.state.name}</div>
                        <div>
                            <PokemonImage id={this.state.id}/>
                        </div>
                    </Link>
                </div>
                <div className='poke-list_item_button'>
                    <Button text={this.state.isCaught ? 'Caught' : 'Catch!'} onClick={this.CatchPokemon.bind(this)}></Button>
                </div>
            </div>
        )
    }
}