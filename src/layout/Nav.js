import React from "react"
import {Link} from 'react-router-dom'


// import '../styles/NavStyles.css'
import { NavBar, Ul, Li } from "../StyledComponents/Navigation.styled"

const Nav = () => (
    <NavBar>
        <Ul>
            <Li><Link to="/" exact>Home</Link></Li>
            <Li><Link to="/Timer">Timer</Link></Li>
            <Li><Link to="/ToDo">ToDo</Link></Li>
            <Li><Link to="/Pokemons">Pokemons</Link></Li>
        </Ul>
    </NavBar>
)

export default Nav