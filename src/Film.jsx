import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function Film() 
{

    const [films, setFilms] = useState();

    const getFilmsNicer = async () => {
        const response = await fetch(
            `https://sakilaapp-1663062580900.azurewebsites.net/Home/allFilms`
        ).then((response ) => response.json());
        setFilms(response);
    };

    useEffect(() => {
        getFilmsNicer();
    }, []);
    
    return (
        <div>
            <h1>Here's all the films at Film McFilmface</h1>
            <table>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th> 
                <th>Year of Release</th>
                <th>Cost Per Week</th>
                <th>Film Duration</th>
                <th>Film Rating</th> 
            {films &&
                films.map((film) => 
                (          
                <tr>    
                    <td>{film.filmID}</td>
                    <td>{film.title}</td>
                    <td>{film.description}</td>
                    <td>{film.release_year}</td>
                    <td>{film.rental_rate}</td>
                    <td>{film.length}</td>
                    <td>{film.rating}</td>
                </tr>
                ))
            }
            </table>
        </div>
       
    );
    
}

export default Film;