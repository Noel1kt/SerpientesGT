import "../assets/css/footer.css"

export const Footer = () => {
    return(
    <div className="footer">
        <div className="logoFooter">
            <img src="../img/snakes.png" alt="" />
        </div>
        <ul className="listaContainer">
            <li className="item">Guía orginal</li>
            <li className="item">Para saber más</li>
            <li className="item">CONAP</li>
            <li className="item">Contacto</li>
        </ul>
        <form action="">
            <input type="text" />
            <input type="text" />
        </form>
        
    </div>
    )
}