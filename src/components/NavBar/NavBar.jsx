import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import style from  './navbar.module.css';

export default function NavBar() {
    return (
        <nav>
        <div className={style.navbar}>
        <Link to="/Home"><img src= "https://cdn.discordapp.com/attachments/509143549787504665/1096068638957649962/CoderGame.png"  alt='codergame'
                width="250px" height="70px"/></Link>
            <div className={style.navbar__options}> 
            <Link class="btn btn-outline-danger" to='/'>Sell</Link>
            <Link class="btn btn-outline-danger" to='/'>Profile</Link>
            <Link class="btn btn-outline-danger" to='/'>🛒</Link>
            </div>
        </div>
        </nav>
    )
    }