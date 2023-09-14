import { useState } from "react";
import { Familias } from "../components/Familias";
import ActionAreaCard from "../components/Cards";
import { useParams } from "react-router-dom";
import "../assets/css/cardsContainer.css"
import "../assets/css/familiaContent.css"


export const FamiliasPage = () => {
    const {id} = useParams()

    // useParams() obtiene el id (nombre de la familia)
    // con el id podemos preguntar si la familia existe /Serpientes?familia=${id}
    // entonces muestra unicamente los objetos con esa categoría por que  ActionAreaCard recibe una url que genera los elementos dentro
   
    return (
        <>
            <h1>Familas</h1>
            <div className="familiasContainer">
               <Familias/> 
            </div>
            
            <div className="cardsContainer">
                <ActionAreaCard url={`/Serpientes?familia=${id}`}/> 
            </div>
            

        </>
    )
}