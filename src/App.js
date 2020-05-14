import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import NasaImage from "./NasaImage";

const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=J6JxN8wcBrZa0egigi1eNI05w4ApldnMrb3Gk0LO'
const apiKey = 'BeX7jcUCTfcD45mgywzl4LNVG3Dgo7MMDMif2Am6'


function App() {
  const [nasaData, setNasaData] = useState([])
  
  

  useEffect(() => {
    axios.get(nasaURL)
  .then(res => {
    setNasaData(res.data)
    console.log(res.data)
    
  }) 
  .catch(err => {
    console.log('error!')
  })
}, [] )



  return (
    <div className="App">
      <h1>Nasa's Daily Photo</h1>
    
   <NasaImage nasaData={nasaData} />
    
    </div>
  );
}

export default App;
