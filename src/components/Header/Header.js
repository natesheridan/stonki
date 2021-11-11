import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import iconwtext from '../../assets/iconwtext.png'

const Header = () => {
    return (
        <div className="header">
            <div class="nav">
                <input type="checkbox" id="nav-check"></input>
                    <div class="nav-header">
                        <img class="nav-logo" src={iconwtext} alt='logo'></img>
                    </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div class="nav-links">
                    <NavLink to="/test">Test</NavLink>
                    <NavLink to="/test">Test</NavLink>
                    <NavLink to="/test">Test</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
