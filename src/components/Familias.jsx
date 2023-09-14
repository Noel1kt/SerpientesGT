import { useState, useEffect } from "react"
import { buscar } from "../api/api"
import { Link } from "react-router-dom"

export const Familias = () => {
    const [familias, setFamilias] = useState([])


    useEffect(() => {
        buscar(`/Familias`, setFamilias)
    },[])

    return(
        familias.map(familia =>(
        <Link to={`/familia/${familia.id}`} key={familia.id}>
            <li >
                {familia.nombre}
            </li>
        </Link>
        ))
    
    )
}