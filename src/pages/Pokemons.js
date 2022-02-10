import React, {useState, useEffect} from "react";

import { PokemonsList, Pokemon, PokemonInfo } from "../StyledComponents/Pokemons.styled";


const Pokemons = () => {
        const [pokemonIndex, setPokemonIndex] = useState(1)
        const [pokemonsData, setPokemonsData] = useState([])
        
        
        const API_URL=`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
        useEffect(()=>{
                if(pokemonIndex<=20){
                fetch(API_URL)
                .then(res => res.json())
                .then( data => {
                        setPokemonsData([...pokemonsData, data])
                })
                setPokemonIndex(pokemonIndex + 1)
                }
        },[pokemonsData])

        return(
                <PokemonsList>
                        {pokemonsData.map(({name, id, weight, abilities,sprites})=> (
                                <Pokemon key={id} image={sprites.front_default}>      
                                <PokemonInfo>
                                        <p>{name}</p>
                                        <p>id: {id}</p>
                                        <p>Waga: {weight} </p>
                                        <p>Umiejętności: {abilities.map(abilitiesObject => abilitiesObject.ability.name).join(', ')}</p>
                                </PokemonInfo>
                                </Pokemon>
                        ))}
                </PokemonsList>
)}

export default Pokemons
