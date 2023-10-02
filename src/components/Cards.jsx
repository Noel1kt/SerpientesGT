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
      const {id,familia,nombreComun,nombreCientifico, img} = serpiente;
      return <Link to={`/Serpientes/${id}`} className={`cardLink-${familia}`} key={id}>
      <Card sx={{ maxWidth: 345 }} className='Card'>
      <CardActionArea className='CardActionArea'>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="Serpiente"
          style={{ width: '350px', height: '150px' }}
        />
        <CardContent className={`CardContent-${familia}`}>
          <Typography className='Typography-title' style={{ fontSize: "20px"}}>
            {nombreComun}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {nombreCientifico}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    })
    
  );
}