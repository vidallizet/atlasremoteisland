import React from 'react';
import '../App.css';
import CardImage from './CardImage.js';
import CardInfo from './CardInfo.js';

function Card(props) {
    console.log(props)
  return(
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
            <CardImage 
             image={props.image}/>
            <CardInfo 
            name={props.name}
            description={props.description}
            lon={props.lon}
            lat={props.lat}
           wiki={props.wiki}
           
            />
        </div>
      </div>
    </li>
  );
}

export default Card;
