import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [nasaDailyData, setNasaDailyData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=J6JxN8wcBrZa0egigi1eNI05w4ApldnMrb3Gk0LO')
  .then(function(response){
    console.log(response);
  }) 
  .catch(function(error){
    console.log(error);
  })
})
    
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
