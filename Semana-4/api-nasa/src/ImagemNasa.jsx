import React, { useState, useEffect } from 'react';
import axios from 'axios';  // para usar essa biblioteca, e necessario instalar

function NASAImage() {
    const [imageData, setImageData] = useState({});

    useEffect(() => {
        axios
            .get(
                'https://api.nasa.gov/planetary/apod?api_key=fu6uaq3hXZhtLXzIkuk89PVgSS905NLbMgHdd20v'
            )
            .then((response) => setImageData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
    <div>
        <img src={ imageData.url } />
        <h2>{ imageData.title } </h2>
        <p> { imageData.explanation } </p>
        </div>
  );
};

export default NASAImage;