import React, {useState, useEffect} from "react";
import axios from 'axios';

 


function NasaImage (props){
    
console.log(props)
    
    return(
        <div className='images'>
            <h2>
          
          {props.nasaData.title}
      </h2>
      <img src={props.nasaData.hdurl}  />
      
      

        </div>
    )
}

export default NasaImage;