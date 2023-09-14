import { useState } from "react"
import "../assets/css/Header.css"
import { Link } from "react-router-dom"

export const Header = () => {

    return(
        <header className="Header">
            <div>
                <a href="">
                    <img className="Image" src="https://aprende.guatemala.com/wp-content/uploads/2021/11/Serpiente-barba-amarilla-en-Guatemala.jpg" alt="" />
                </a>
            </div>
            <nav className="nav">
                <ul className="container-items">
                    <li><Link to="/Menu">Todas las especies</Link></li>
                    <li><Link to="/Menu">Índice de especies</Link></li>
                    <li><Link to="/familias/:id">Cóm usar la guía</Link></li>
                    <li><Link to="">Sobre los autores</Link></li>
                </ul>
            </nav>
            
        </header>
    )
}