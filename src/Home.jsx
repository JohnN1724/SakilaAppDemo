import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './css/index.css';


function Home() {

    const [films, setFilms] = useState();
    const randomFilm = async () => {

        let id = Math.floor(Math.random() * (1000 - 1 + 1) + 1)

        const response = await fetch(
            `https://sakilaapp-1663062580900.azurewebsites.net/Home/Film/${id}`
        ).then((response) => response.json());
            setFilms(response);
            
    };
    useEffect(() => {
        randomFilm();
    }, []);



    return (
        <div>
                <h1>Welcome User!</h1>
                <h2>Film of the Day</h2>
            <div>
                {films &&
                     <div>
                        <h3>{films.title} ({films.release_year})</h3>
                        <p>{films.description} - {films.length} minutes</p>
                        <h4>Weekly rental cost: £{films.rental_rate}</h4>
                    </div>  
                }
            </div>
        </div>
    );
}

export default Home;