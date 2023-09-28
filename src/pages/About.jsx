export const About = () => {
    return( <>
        <section className="cueg-section">
            <h1 className="cueg-title">Sobre los autores</h1>
            <p className="cueg-paragraph">Este libro está organizado de tal manera que las fotografías de las especies de serpientes, pueden usarse como referencia para comparar especímenes observados
                o capturados en el campo, y así determinar la especie en cuestión. En la página
                opuesta a cada fotografía, se presenta la siguiente información:</p>
        
            <ul className="cueg-ul">
                <li><h3>NOMBRE COMÚN </h3> <p> es el nombre que se usa en el campo.</p></li>
                <li><h3>NOMBRE CIENTÍFICO</h3> <p> es el nombre que utilizan los científicos que estudian animales.</p></li>
                <li><h3>DESCRIPCIÓN</h3> <p> es la información sobre la forma, tamaño, color y rasgos distintivos de la serpiente.</p></li>
                <li><h3>DISTRIBUCIÓN EN GUATEMALA</h3> <p> señala los departamentos o regiones en los que ocurre la especie en el país.</p></li>
                <li><h3>HISTORIA NATURAL</h3> <p> donde se explica la forma en que vive la serpiente.</p></li>
                <li><h3>VENENOSIDAD</h3> <p> indica qué tan débil o fuerte es el veneno de la serpiente, según el siguiente criterio:</p></li>
                <ul className="cueg-veneno">
                    <li><h3>No venenosa:</h3> <p>La serpiente no produce ni inyecta veneno.</p></li>
                    <li><h3>Levemente venenosa:</h3> <p> El veneno puede producir inflamación leve únicamente en el sitio de la mordedura.</p></li>
                    <li><h3>Moderadamente venenosa:</h3> <p>El veneno puede causar inflamación y daño nervioso pero no la muerte de la persona.</p></li>
                    <li><h3>Venenosa:</h3> <p>El veneno puede causar la muerte de la persona. Requiere tratamiento hospitalario.</p></li>
                </ul>
                        
            </ul>
        </section>
    </>)
}