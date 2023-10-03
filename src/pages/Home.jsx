import React, { useRef, useEffect } from 'react';
import "../assets/css/home.css"; // Importa tus estilos CSS

export const Home = () => {
  const videoRef = useRef(null);

  return (
    <div className="video-container">
      <iframe
        title="YouTube video player"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Gk1B4hbfwgM?autoplay=1&mute=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ref={videoRef} // Ref para acceder al elemento iframe
      ></iframe>
    </div>
  );
}
