import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function Nasa({pic}) {
    const [photo, setPhoto] = useState("");
    const fetchPic = (pic) =>
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
}



ReactDOM.render(<App />, document.getElementById("root"));
