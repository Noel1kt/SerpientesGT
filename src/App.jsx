import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Page404 from "./pages/Page404"
import { Header } from "./components/Header"
import ActionAreaCard from "./components/Cards"
import { Card } from "./components/CardInfo"
import { FamiliasPage } from "./pages/FamiliasPage"
import { Footer } from "./components/Footer"
import { About } from "./pages/About"

export function App() {

    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Cards" element={<ActionAreaCard/>}/>
                <Route path="/Serpientes/:id" element={<Card/>}/>
                <Route path="/familia/:id" element={<FamiliasPage/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}