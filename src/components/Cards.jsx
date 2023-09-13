import { useState, useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { buscar } from '../api/api';
import { Link } from 'react-router-dom';
import "../assets/css/cardsContainer.css"

export default function ActionAreaCard({url}) {
  const [serpientes, setSerpientes] = useState([]);

  useEffect(() => {
    buscar(url, setSerpientes)
  }, [url])

  return (
    serpientes.map( serpiente => {
      const {familia,nombreComun,nombreCientifico,descripcion,distribucionEnGuatemala,historiaNatural,venenosidad} = serpiente;
      return <Link to={`/Serpientes/${nombreCientifico}`} className={`post__card post-card--${familia}`} key={nombreCientifico}>
      <Card sx={{ maxWidth: 345 }} className='Card'>
      <CardActionArea className='CardActionArea'>
        <CardMedia 
          component="img"
          height="140"
          image="https://aprende.guatemala.com/wp-content/uploads/2021/11/Serpiente-barba-amarilla-en-Guatemala-02.jpg"
          alt="green iguana"
        />
        <CardContent className={`CardContent-${familia}`}>
          <Typography gutterBottom variant="h6" component="div">
            {nombreComun}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {nombreCientifico}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    })
    
  );
}