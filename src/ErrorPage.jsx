import React from 'react';
import { useEffect } from 'react';


function NoPage() 
{
    function getCat()
    {
        let catButton = document.getElementById('give-cat')

            catButton.addEventListener("click", evt => 
            {

                let catDiv = document.getElementById('cat-pic')

                fetch('https://api.thecatapi.com/v1/images/search?')
                .then(res => res.json())
                .then(cats => 
                {
                    cats.forEach(cat => 
                    {
                        catDiv.innerHTML = `<h3> cat go neooowm</h3> 
                        <img src="${cat.url}" alt="kitty"/>`
                    });
                })
            })
    }
    function getKanye()
    {
        let quotesDiv = document.getElementById('quotes')

        fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(quote => {quotesDiv.innerHTML += `<p> ${quote.quote}</p>`})

    }

    useEffect(() => {
        getKanye();
        getCat();
    })

    return (     
    <div>
        <h1>Ooops something has gone wrong! :(</h1>
        <h2>Try and return to another page</h2>
        <div id ="quotes">
    </div>
    <button id="give-cat">pls give cat </button>

    <div id ="cat-pic">
    </div>
    </div>
       
    );
}

export default NoPage;