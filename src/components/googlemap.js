import React from 'react';
import '../App.css';
function Googlemaps(props) {
    return(
      <div className="card-container">
       
        <p className="card-text lat">{props.lat}</p>
        <p className="card-text lon">{props.lon}</p>
       
      </div>
      
      <embed>

</embed>
    );
  }
  
  export default Googlemaps;
    



