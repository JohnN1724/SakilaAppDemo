import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './css/index.css';


function Home() {

    const [films, setFilms] = useState();
    const randFilm = async () => {

        let id = Math.floor(Math.random() * (1000 - 1 + 1) + 1)

        const response = await fetch(
            `https://sakilaapp-1663062580900.azurewebsites.net/Home/Film/${id}`
        ).then((response) => response.json());
            setFilms(response);
            
    };
    useEffect(() => {
        randFilm();
    }, []);

   

      function checkRating()
      {
        if(films.rating === "G")
        {
          return(
                 <p>This film is rated {films.rating} it's a good one
                  for the kids</p>
                )
        } else if(films.rating ==="PG")
        {
          return(
                 <p>This one is likely to be good for older children
                     It's rated {films.rating}</p>
                )            
   
        } else if(films.rating ==="PG-13")
        {
             return(
                <p>We'd recommend this for teens as it's rated {films.rating}! </p>
            )
        } else if(films.rating ==="NC-17")
        {
            return(
                <p>This one's rated for an older audience {films.rating}</p>
            )
        } else 
        {
            return <p>This film is either not rated yet or has been rated R
                adult only viewing is recommended. {films.rating}
            </p>
        }
         
        }


    return (
        <div>
                <h1>Hello and Welcome to</h1>
                <h2>Filmy McFilm Face</h2>
                <h3>Below is our recommended film of the day! </h3>
                <h3>Today it is...</h3>
            <div>
                {films &&
                     <div>
                        <p>{films.title}</p>
                        <p>{films.description}</p>
                        <h4>Released in...</h4>
                        <p>{films.release_year}</p>
                        <h4>It will cost just £{films.rental_rate} per week</h4>
                        <h4>This epic film is going to blow your mind for {films.length} minutes</h4>
                        {checkRating()}
                    </div>  
                }
            </div>
        </div>
    );
}

export default Home;