import React from 'react';
import Button from "../items/button";
import {Link} from "react-router-dom";

export default class PokedexHeader extends React.Component{
    render() {
        return(
            <header className='pokedex_header'>
                <Link to='/'><Button text={'Pokedex'}>]</Button></Link>
                <Link to='/caught'><Button text={'Caught'}></Button></Link>
            </header>
        )
    }
}