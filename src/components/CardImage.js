import React from 'react';
import '../App.css';

function CardImage(props) {
  return(
   <img src={props.image}/>
  );
}

export default CardImage;