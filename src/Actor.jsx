import React from 'react';
import Capture from './Capture.jpg';
import { useEffect } from 'react';
import { useState } from 'react';


function Actor() {


    const [actors, setActors] = useState();

    const getActors = async () => {
        const response = await fetch(
            `https://sakilaapp-1663062580900.azurewebsites.net/Home/allActors`
        ).then((response ) => response.json());
        setActors(response);
    };

    const [actor, setActor] = useState();

    const getRandAct = async () => {

        let id = Math.floor(Math.random() * (200 - 1 + 1) + 1)

        const resp = await fetch(
            `https://sakilaapp-1663062580900.azurewebsites.net/Home/Actor/${id}`
        ).then((resp) => resp.json());
            setActor(resp);
            console.log(resp);
    };


    useEffect(() => {
        getActors();
        getRandAct();
    }, []);


    return (
        <div>
            <h1>Have a favourite cast member?</h1>
            <h3>Or perhaps you're looking for a recommendation?</h3>
            <div>
                {actor &&
                    <div>
                        <h4>{actor.firstName}</h4>
                        <h4>{actor.lastName}</h4>
                    </div>
                }
            </div>
            <img src={Capture} alt = "me"/>
            <h3>A complete list of all the actors featured in the media we have. </h3>
            <div>
                <table>
                <th>ID</th>
                <th>Forename</th>
                <th>Surname</th>
                <th>See their work</th>    
                  {actors &&
                    actors.map((actor) =>
                      (
                        <tr>
                            <td><a href="https://www.imdb.com/?ref_=nv_home">{actor.actorId}</a></td>
                            <td>{actor.firstName}</td>
                            <td>{actor.lastName}</td>
                            <td><select>
                                    <option value="jeff">Jeff</option>
                                    <option value="Memes">Memes</option>
                                </select>
                            </td>
                        </tr>
                      ))
                  }
                </table>
            </div>

        </div>
    );
}

export default Actor;