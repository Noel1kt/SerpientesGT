import React from 'react';
import "../assets/css/home.css"; // Importa tus estilos CSS

export const Home = () => {
    const videoUrl = "https://www.youtube.com/embed/Gk1B4hbfwgM";

  return (
    <div className='video-container'>
      <iframe
        width="100%" // Ancho del reproductor
        src={videoUrl}
        title="YouTube Video"
        frameBorder="0" // Sin bordes alrededor del reproductor
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Opciones permitidas
        allowFullScreen // Permitir la visualización en pantalla completa
      ></iframe>
    </div>
  );

}
