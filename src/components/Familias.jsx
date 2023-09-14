import { useState, useEffect } from "react"
import { buscar } from "../api/api"
import { Link } from "react-router-dom"
import "../assets/css/familiaContent.css"

export const Familias = () => {
    const [familias, setFamilias] = useState([])


    useEffect(() => {
        buscar(`/Familias`, setFamilias)
    },[])

    return(
        familias.map(familia =>(
        <Link to={`/familia/${familia.id}`} className="familiaLink" key={familia.id}>
            <div className="familiaContaimer">
                <div className={`familiaContent-${familia.id}`}>
                    <h3>{familia.id}</h3>
                </div>
            </div>
            
        </Link>
        ))
    
    )
}