import styled from "styled-components";

export const PokemonsList = styled.div`
    width: 90vw;
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const Pokemon = styled.div`
    height: 200px;
    flex-basis: 10%;
    display: inline-block;
    background-color: green;
    margin: 5px;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center top;

    background-image: url(${props => props.image})
`
export const PokemonInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-bottom: 5px;
    font-family: sans-serif;
    text-transform: capitalize;
`