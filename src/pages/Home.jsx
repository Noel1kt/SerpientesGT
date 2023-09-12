import ActionAreaCard from "../components/Cards"
import "../assets/css/cardsContainer.css"

export const Home = () => {
    return(
        <main>
            <div className="cardsContainer">
                <ActionAreaCard/>
                <ActionAreaCard/>
                <ActionAreaCard/>
                <ActionAreaCard/>
                <ActionAreaCard/>
                <ActionAreaCard/>
            </div>
        </main>
    )
}