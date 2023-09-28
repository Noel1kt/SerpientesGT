import "../assets/css/About.css"

export const About = () => {
    return( <>
        <section className="about-section">
            <h1 className="about-title">Sobre los autores</h1>
            <p className="about-paragraph">Esta web contiene la información del libro "Serpientes de Guatemala: Guía para identificación de especies"
            de Dennis Guerra Centeno, Héctor Fuentes Rousselin y David Morán Villatoro. Este libro está diseñado para ser utilizado como una guía rápida para identificar
            la mayoría de las especies de serpientes de Guatemala. Adicionalmente, el texto presenta una síntesis de la información científica disponible sobre las especies
            abordadas.
            Además de permitir el reconocimiento de especies, esta guía puede ser un auxiliar
            en actividades de docencia, educación e investigación y constituye una referencia
            de la diversidad de uno de los grupos representativos de la biota de Guatemala.
            Esta primera edición incluye 78 especies nativas, presentadas en orden alfabético
            según la familia y el nombre científico.
            La fotografía de cada especie de serpiente está acompañada de la siguiente información: a. nombre común, b. nombre científico, c. descripción de la especie,
            d. distribución en Guatemala, e. historia natural y f. grado de venenosidad.
            Esta obra reúne el trabajo de campo y documental de más de cinco años. Todas las
            fotografías fueron tomadas por los autores.
            </p>
        
            <ul className="about-ul">
                <li><h3>Dennis Guerra Centeno </h3> <p> es Médico Veterinario por la Universidad de San Carlos de
                        Guatemala, Magister Scientie en Conservación y Manejo de Vida Silvestre por el Instituto Internacional en Conservación y Manejo de Vida Silvestre, UNA, Costa Rica
                        y candidato a Doctor en Investigación Social por la Universidad Panamericana de
                        Guatemala. Actualmente se desempeña como coordinador de la Unidad de Vida
                        Silvestre y de la Maestría en Ciencias en Manejo de Vida Silvestre en la Facultad de
                        Medicina Veterinaria y Zootecnia de la Universidad de San Carlos de Guatemala. Ha
                        realizado investigaciones sobre ecología de reptiles y anfibios, accidente ofídico y
                        hematología y química sérica de vertebrados. msc.dennisguerra@gmail.com</p></li>
                <li><h3>Héctor Fuentes Rousselin</h3> <p> es Médico Veterinario por la Universidad de San Carlos
                        de Guatemala y candidato a la Maestría Internacional en Biología de la Conservación por la Universidad Internacional de Andalucía, España. Actualmente es profesor de la Unidad de Vida Silvestre de la Facultad de Medicina Veterinaria y Zootecnia de la Universidad de San Carlos de Guatemala. Ha realizado investigaciones
                        sobre ecología de reptiles y anfibios. erhfuentes@yahoo.com</p></li>
                <li><h3>David Morán Villatoro</h3> <p> es Médico Veterinario y Maestro en Ciencias en Manejo de
                        Vida Silvestre por la Universidad de San Carlos de Guatemala. Actualmente es investigador en la Universidad Del Valle de Guatemala. Ha realizado investigaciones
                        sobre ecología de reptiles y anfibios, así como sobre enfermedades emergentes y
                        salud ecosistémica. jodamv@yahoo.com</p></li>
                        
            </ul>
        </section>
    </>)
}