import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Page404 from "./pages/Page404"
import { Header } from "./components/Header"
import ActionAreaCard from "./components/Cards"

export function App() {

    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Card" element={<ActionAreaCard/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </Router>
    )
}