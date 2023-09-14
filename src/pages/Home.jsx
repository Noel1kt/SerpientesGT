import ActionAreaCard from "../components/Cards"
import "../assets/css/cardsContainer.css"
import { Familias } from "../components/Familias"

export const Home = () => {
    return(
        <main>
            
            <div className="cardsContainer">
                <ActionAreaCard url={"/Serpientes"}/>
            </div>
        </main>
    )
}