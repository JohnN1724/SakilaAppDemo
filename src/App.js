import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './css/App.css';

function App() {

  const [films, setFilms] = useState();
  const randFilm = async() => {

    let id = Math.floor(Math.random() * (1000 - 1 + 1) + 1)

    const response = await fetch('http://localhost:8080/Home/Film/1').then((response) => response.json());
      setFilms(response);
  };
  console.log(films);
  useEffect(() => {
    randFilm();
  }, []);

  return (
    <div>
      <h1>Our Film Pick!</h1>
      <div>
        {films &&
          <div>
            <p>{films.title}</p>
            <p>{films.year}</p>
            <p>{films.description}</p>
          </div>
        }
      </div>
    </div>
  )

}

export default App;
