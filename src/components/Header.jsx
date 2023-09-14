import { useState } from "react"
import "../assets/css/Header.css"
import { Link } from "react-router-dom"

export const Header = () => {

    return(
        <header className="Header">
            <div>
                <a href="">
                    <img className="Image" src="" alt="" />
                </a>
            </div>
            <nav className="nav">
                <ul className="container-items">
                    <li><Link to="/">Todas las especies</Link></li>
                    <li><Link to="/familia/:id">Familias</Link></li>
                    <li><Link to="/Menu">Cóm usar la guía</Link></li>
                    <li><Link to="">Sobre los autores</Link></li>
                </ul>
            </nav>
            
        </header>
    )
}