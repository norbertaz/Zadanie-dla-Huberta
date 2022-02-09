import React, {useState, useEffect} from "react";

import '../styles/PokemonsStyles.css'


const Pokemons = () => {
        const [pokemons, setPokemons] = useState([])
        const [pokemonIndex, setPokemonIndex] = useState(1)
        const [pokemonName, setPokemonName] = useState('')
        const [pokemonWeight, setPokemonWeight] = useState()
        const [pokemonAbilities, setPokemonAbilities] = useState([])
        
        
         const API_URL=`https://pokeapi.co/api/v2/pokemon`
         const SEC_API=`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
         useEffect(() => {
                fetch(API_URL)
                .then(res => res.json())
                .then( data => {
                        setPokemons(data.results)
                })
                
        },[])
        // setInterval(()=>{
        //         setPokemonIndex(pokemonIndex + 1)
        // },1000)
        useEffect(()=>{
                fetch(SEC_API)
                .then(res => res.json())
                .then( data => {
                        setPokemonWeight(data.weight)
                        setPokemonAbilities(data.abilities)
                })
                console.log(pokemonAbilities)
        },[pokemonWeight])
        
        return(
                <div className="pokemons-list">
                        {pokemons.map(({name,url})=> (
                                <div className="pokemon" key={url}>
                                        {name}
                                        <p>Waga: {pokemonWeight}</p>
                                </div>
                        ))}
                </div>
)}

export default Pokemons