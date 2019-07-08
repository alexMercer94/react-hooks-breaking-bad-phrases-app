import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Quote({ phrase }) {
    return (
        <div className="frase">
            <h1>{phrase.quote}</h1>
            <p>- {phrase.author}</p>
        </div>
    );
}

function App() {
    const [phrase, getPhrase] = useState({});

    // Consult
    const fetchData = async () => {
        const result = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

        // Agregar el resultado de la API al State
        getPhrase(result.data[0]);
    };

    // Consult a Rest-API
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="contenedor">
            <Quote phrase={phrase} />
            <button onClick={fetchData}>Generar Nueva</button>
        </div>
    );
}
export default App;
