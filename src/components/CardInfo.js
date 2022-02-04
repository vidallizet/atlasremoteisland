import React from 'react';
import '../App.css';
import WikiButton from './WikiButton.js';

function CardInfo(props) {
  return(
    <div className="card-container">
      <div className="card-title">{props.name}</div>
      <p className="card-text description">{props.description}</p>
      <p className="card-text lat">{props.lat}</p>
      <p className="card-text lon">{props.lon}</p>
      <p className="card-text image">{props.image}</p>
      
      <WikiButton />
    </div>
  );
}

export default CardInfo;