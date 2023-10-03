import { useState } from "react";
import { Familias } from "../components/Familias";
import ActionAreaCard from "../components/Cards";
import { useParams } from "react-router-dom";
import "../assets/css/cardsContainer.css"
import "../assets/css/familiaContent.css"


export const FamiliasPage = () => {
    const {id} = useParams()

    const[muestra , setMuestra] = useState(true);

    const dejarDeMostrar = () => {
        setMuestra(false)
        console.log(muestra)
    }


    // useParams() obtiene el id (nombre de la familia)
    // con el id podemos preguntar si la familia existe /Serpientes?familia=${id}
    // entonces muestra unicamente los objetos con esa categoría por que  ActionAreaCard recibe una url que genera los elementos dentro
   
    return (
        <>
            <div className="familiasContainer" onClick={dejarDeMostrar}>
               <Familias/> 
            </div>

            <div className="cardsContainer">
            {muestra === true ? <ActionAreaCard url={"/Serpientes"}/>  : <h1></h1>}
            {muestra === false ? <ActionAreaCard url={`/Serpientes?familia=${id}`}/> : <h1></h1>}
                 
            </div>
            

        </>
    )
}