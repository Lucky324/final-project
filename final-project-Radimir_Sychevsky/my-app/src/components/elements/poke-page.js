import React from 'react';
import PokemonImage from "../items/image";
import axios from 'axios';

export default class PokemonPage extends React.Component {
    state = {id:null,
        name:'',
        isCaught:false,
        caughtDate:'',
        isLoad: false
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const data = await axios.get('http://localhost:3001/pokemons');
        this.setState({id: id, name: data.data[id - 1].name, isCaught: data.data[id - 1].isCaught,
            caughtDate: data.data[id - 1].isCaught ? `${data.data[id - 1].caughtDate}` : 'not caught yet',
            isLoad:true
        })
    }

    render() {
        if(this.state.isLoad){
            return(
                <div>
                    <h1>{this.state.name}</h1>
                    <div className='pokemon-page__image'>
                        <PokemonImage id={this.state.id}/>
                    </div>
                    <p>ID: {this.state.id}</p>
                    <p>Status: {this.state.isCaught?'caught':'not caught yet'}</p>
                    <p>Date: {this.state.caughtDate}</p>
                </div>
            )
        } else {
            return (
                <p className='loading-data'>Loading</p>
            )
        }
    }
}