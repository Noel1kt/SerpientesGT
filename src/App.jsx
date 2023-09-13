import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Page404 from "./pages/Page404"
import { Header } from "./components/Header"
import ActionAreaCard from "./components/Cards"
import { Card } from "./components/Card"

export function App() {

    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Cards" element={<ActionAreaCard/>}/>
                <Route path="/Serpientes/:nombreComun" element={<Card/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </Router>
    )
}