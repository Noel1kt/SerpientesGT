import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"

export const Card = ({url}) => {

    const [card, setCard] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        buscar(`/Serpientes/${id}`, setCard).catch(() => {
            navigate("/not-found")
        })
    },[id])
    return(
      <main>
        <div>
         {card.img}
        </div>
        <div>
          <h2>NOMBRE COMÚN: {card.nombreComun}</h2>
          <h2>NOMBRE CIENTÍFICO: {card.nombreCientifico}</h2>
          <h2>DESCRIPCIÓN: {card.descripcion}</h2>
          <h2>DISTRIBUCIÓN EN GUATEMALA: {card.distribucionEnGuatemala}</h2>
          <h2>HISTORIA NATURAL: {card.historiaNatural}</h2>
          <h2>VENENOSIDAD: {card.venenosidad}</h2>
        </div>
        
      </main>
    )
  }