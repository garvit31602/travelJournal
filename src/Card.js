import React from "react";
import { ReactDOM } from "react";
import pin from "./images/Fill 219.svg"

function Card(prop){
    return(
    <div id="card">
       <img height={120} id="mainphoto" src={process.env.PUBLIC_URL + `/${prop.img}`}/>
      <div id="text">
       <span><img src={pin} height={7}/></span>
       <span id="loc">{prop.location}</span> <a href={prop.googleMapsUrl}><u>View on Google Maps</u></a>
       <div id="title">{prop.title}</div>
       <div id="date">{prop.startDate}-{prop.endDate}</div>
       <div id="desc">{prop.description}</div>
       </div> 
    </div>
    )
}

export default Card;