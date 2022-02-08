import React from "react"
import {Link} from 'react-router-dom'


import '../styles/NavStyles.css'


const Nav = () => (
    <nav>
            <ul>
                <li><Link to="/" exact>Home</Link></li>
                <li><Link to="/Timer">Timer</Link></li>
                <li><Link to="/ToDo">ToDo</Link></li>
                <li><Link to="/Pokemons">Pokemons</Link></li>
            </ul>
        </nav>
)

export default Nav