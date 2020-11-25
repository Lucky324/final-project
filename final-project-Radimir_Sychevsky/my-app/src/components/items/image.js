import React from 'react';

export default class PokemonImage extends React.Component {
    render() {
        return(
            <img className='pokemon-image' src={`/pokemons/${this.props.id}.png`} alt={'id:'+this.props.id}/>
        )
    }
}
