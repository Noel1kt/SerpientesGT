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
        <div >
            <form action="" className="formContainer">
                <span className="textForm">Escribenos</span>
                <input type="text" placeholder="Email" className="inputForm"/>
                <textarea placeholder="Mensaje" name="" id="" cols="30" rows="10"></textarea>
            </form>
        </div>
        
        
    </div>
    )
}