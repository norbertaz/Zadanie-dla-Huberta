import React, {useState, useEffect} from "react";

import '../styles/PokemonsStyles.css'


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

console.log( pokemonsData)
        return(
                <div className="pokemons-list">
                        {pokemonsData.map(({name, id, weight, abilities,sprites})=> (
                                <div className="pokemon" key={id} style={{backgroundImage: `url(${sprites.front_default}`}}>      
                                <div className="pokemon-info">
                                        <p>{name}</p>
                                        <p>id: {id}</p>
                                        <p>Waga: {weight} </p>
                                        <p>Umiejętności: {abilities.map(abilitiesObject => abilitiesObject.ability.name).join(', ')}</p>
                                </div>
                                </div>
                        ))}
                </div>
)}

export default Pokemons
