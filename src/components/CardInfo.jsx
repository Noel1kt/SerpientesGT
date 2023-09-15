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
        <h2>Aquí está {card.nombreComun}</h2>
        <h3>
        {card.descripcion}
        </h3>
      </main>
    )
  }