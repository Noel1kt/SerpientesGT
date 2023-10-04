import React from 'react';
import "../assets/css/home.css"; // Importa tus estilos CSS

export const Home = () => {
    const videoUrl = "https://www.youtube.com/embed/Gk1B4hbfwgM";

  return (
    <div className='home-container'>
      <div className='video-container'>
        <iframe
          src={videoUrl}
          title="YouTube Video"
          frameBorder="0" // Sin bordes alrededor del reproductor
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Opciones permitidas
          allowFullScreen // Permitir la visualización en pantalla completa
        ></iframe>
      </div>
      <div className='text-conap'>
        <h3>El Día Mundial de las Serpientes es una oportunidad para crear conciencia sobre la importancia de estos animales en el ecosistema.
           Conservar y proteger las serpientes es importante por varias razones. En primer lugar, las serpientes son controladoras de plagas, ayudando a mitigar las poblaciones de ratones, insectos y otros animales que pueden afectar el desarrollo de la sociedad. Además, las serpientes constituyen una porción significativa de los depredadores, que mantienen a nuestros ecosistemas naturales equilibrados. También pueden controlar brotes de enfermedades. Esperamos que esta celebración ayude a crear conciencia sobre la importancia de las serpientes y su papel en el ecosistema.
           ¡Valoremos nuestra Guatemala Megadiversa! Consejo Nacional de Áreas Protegidas ¡CONAP!</h3>
      </div>
    </div>
    
  );

}
