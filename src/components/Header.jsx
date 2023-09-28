import { useState } from "react"
import "../assets/css/Header.css"
import { Link } from "react-router-dom"

export const Header = () => {

    return(
        <header className="Header">
            <nav className="nav">
                <ul className="container-items">
                    <li><Link className="LinkLi" to="/">Todas las especies</Link></li>
                    <li><Link className="LinkLi" to="/familia/:id">Familias</Link></li>
                    <li><Link className="LinkLi" to="/Menu">Cómo usar la guía</Link></li>
                    <li><Link className="LinkLi" to="/About">Sobre los autores</Link></li>
                </ul>
            </nav>
            
        </header>
    )
}