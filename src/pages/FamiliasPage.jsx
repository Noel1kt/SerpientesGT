import { useState } from "react";
import { Familias } from "../components/Familias";
import ActionAreaCard from "../components/Cards";
import { useParams } from "react-router-dom";


export const FamiliasPage = () => {
    const {id} = useParams()
    console.log("familia page",id)
    return (
        <>
            <h1>Pet Familias</h1>
            <Familias/>
            <ActionAreaCard url={`/Serpientes?familia=${id}`}/>

        </>
    )
}