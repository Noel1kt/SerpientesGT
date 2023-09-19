import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"
import "../assets/css/cardInfo.css"

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
      <main className="cardInfo">
        <div>
          <img 
          className="imgCardInfo"
          src={card.img} alt="serpiente"
          style={{ width: '600px', height: '450px'}} /> 
        </div>
        <div className="infoContainer">
          <h2 className="textcontainer">NOMBRE COMÚN:<p>{card.nombreComun}</p></h2>
          <h2 className="textcontainer">NOMBRE CIENTÍFICO: <p>{card.nombreCientifico}</p></h2>
          <h2 className="textcontainer">DESCRIPCIÓN:<p>{card.descripcion}</p></h2>
          <h2 className="textcontainer">DISTRIBUCIÓN EN GUATEMALA:<p>{card.distribucionEnGuatemala}</p></h2>
          <h2 className="textcontainer">HISTORIA NATURAL:<p>{card.historiaNatural}</p></h2>
          <h2 className="textcontainer">VENENOSIDAD:<p>{card.venenosidad}</p></h2>
        </div>
        
      </main>
    )
  }