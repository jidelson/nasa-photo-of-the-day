import React, {useState, useEffect} from "react";
import
const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=J6JxN8wcBrZa0egigi1eNI05w4ApldnMrb3Gk0LO'

const apiKey = 'J6JxN8wcBrZa0egigi1eNI05w4ApldnMrb3Gk0LO'

function nasaImage (props){
    const [data] = useState(props.props)
    return(
        <div className=''>
        {data.map((imgData, index))}
        <ImageTitle nasaImage/>

        </div>
    )
}

export default nasaImage;